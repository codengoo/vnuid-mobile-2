package com.anonymous.rnai

import android.graphics.Rect
import com.google.gson.Gson
import com.mrousavy.camera.frameprocessors.Frame
import com.mrousavy.camera.frameprocessors.FrameProcessorPlugin
import com.mrousavy.camera.frameprocessors.VisionCameraProxy
import com.anonymous.rnai.domain.BitmapUtils
import com.anonymous.rnai.domain.FaceDetector
import com.anonymous.rnai.domain.FaceInfo
import com.anonymous.rnai.domain.FaceNet
import com.anonymous.rnai.domain.FaceSpoofDetector
import kotlinx.coroutines.runBlocking
import kotlin.math.pow
import kotlin.math.sqrt

private fun cosineDistance(x1: FloatArray, x2: FloatArray): Float {
    var mag1 = 0.0f
    var mag2 = 0.0f
    var product = 0.0f
    for (i in x1.indices) {
        mag1 += x1[i].pow(2)
        mag2 += x2[i].pow(2)
        product += x1[i] * x2[i]
    }
    mag1 = sqrt(mag1)
    mag2 = sqrt(mag2)
    return product / (mag1 * mag2)
}

data class CheckInfo(
    val face: FaceInfo,
    val score: Float,
    val emb: Any
//    val spoof: Any
)

class RnAiPlugin(proxy: VisionCameraProxy, options: Map<String, Any>?) : FrameProcessorPlugin() {
    private val faceDetector = FaceDetector()
    private val faceNet = FaceNet(proxy.context)

    override fun callback(frame: Frame, arguments: Map<String, Any>?): Any? {
        if (arguments == null || arguments["embedding"] == null) return null
        val embeddingRefRaw = arguments["embedding"] as ArrayList<Double>
        val embOrg = embeddingRefRaw.map { it.toFloat() }.toFloatArray()

        val mediaImage = frame.image
        val gson = Gson()

        mediaImage?.let { image ->
            // Face detector
            val face = faceDetector.detectFace(image) ?: return null
            val boundingBox = face.bound

            val faceImage = BitmapUtils.cropFace(image, boundingBox)
            if (faceImage != null) {
//             Embedding
                val emb = runBlocking { faceNet.getFaceEmbedding(faceImage) }
                val sim = cosineDistance(emb, embOrg)

//             Face Spoofing
//                val im = BitmapUtils.convertYuvToRgba(image);
//                val spoof = runBlocking { faceSpoof.detectSpoof(im, boundingBox) }

                val result = CheckInfo(
                    face = face,
                    score = sim,
                    emb = emb
                )

                return gson.toJson(result);
            } else {
                return null
            }
        }

        return null
    }
}