package com.anonymous.rnai.domain

import android.graphics.Bitmap
import android.graphics.Rect
import android.media.Image
import com.google.android.gms.tasks.Tasks
import com.google.gson.Gson
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.face.Face
import com.google.mlkit.vision.face.FaceContour
import com.google.mlkit.vision.face.FaceDetection
import com.google.mlkit.vision.face.FaceDetectorOptions
import kotlin.math.ceil

data class FaceInfo(
    val bound: Rect,
    val yaw: Float,
    val pitch: Float,
    val roll: Float
)

class FaceDetector() {
    private val options = FaceDetectorOptions.Builder()
        .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_ACCURATE)
        .setContourMode(FaceDetectorOptions.CONTOUR_MODE_ALL)
//        .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)
        .build()

    private val faceDetector = FaceDetection.getClient(options)

    private fun detectHeadDirection(yaw: Float, pitch: Float, roll: Float): String {
        return when {
            yaw > 15 -> "TURN_RIGHT"
            yaw < -15 -> "TURN_LEFT"
            pitch > 15 -> "LOOK_UP"
            pitch < -15 -> "LOOK_DOWN"
            roll > 15 -> "TILT_RIGHT"
            roll < -15 -> "TILT_LEFT"
            else -> "FORWARD"
        }
    }

    private fun processBoundingBox(boundingBox: Rect): Map<String, Any> {
        val bounds = mutableMapOf<String, Any>()

        // Calculate offset (we need to center the overlay on the target)
        val offsetX = (boundingBox.exactCenterX() - ceil(boundingBox.width().toDouble())) / 2.0
        val offsetY = (boundingBox.exactCenterY() - ceil(boundingBox.height().toDouble())) / 2.0

        val x = boundingBox.right + offsetX
        val y = boundingBox.top + offsetY

        bounds["x"] = boundingBox.centerX().toDouble() + (boundingBox.centerX() - x)
        bounds["y"] = boundingBox.centerY().toDouble() + (y - boundingBox.centerY())
        bounds["top"] = boundingBox.top.toDouble()
        bounds["left"] = boundingBox.left.toDouble()
        bounds["width"] = boundingBox.width().toDouble()
        bounds["height"] = boundingBox.height().toDouble()

        bounds["boundingCenterX"] = boundingBox.centerX()
        bounds["boundingCenterY"] = boundingBox.centerY()
        bounds["boundingExactCenterX"] = boundingBox.exactCenterX()
        bounds["boundingExactCenterY"] = boundingBox.exactCenterY()

        return bounds
    }

    private fun processFaceContours(face: Face): Map<String, Any> {
        val faceContoursTypes = arrayOf(
            FaceContour.FACE,
            FaceContour.LEFT_EYEBROW_TOP,
            FaceContour.LEFT_EYEBROW_BOTTOM,
            FaceContour.RIGHT_EYEBROW_TOP,
            FaceContour.RIGHT_EYEBROW_BOTTOM,
            FaceContour.LEFT_EYE,
            FaceContour.RIGHT_EYE,
            FaceContour.UPPER_LIP_TOP,
            FaceContour.UPPER_LIP_BOTTOM,
            FaceContour.LOWER_LIP_TOP,
            FaceContour.LOWER_LIP_BOTTOM,
            FaceContour.NOSE_BRIDGE,
            FaceContour.NOSE_BOTTOM,
            FaceContour.LEFT_CHEEK,
            FaceContour.RIGHT_CHEEK
        )

        val faceContoursTypesStrings = arrayOf(
            "FACE",
            "LEFT_EYEBROW_TOP",
            "LEFT_EYEBROW_BOTTOM",
            "RIGHT_EYEBROW_TOP",
            "RIGHT_EYEBROW_BOTTOM",
            "LEFT_EYE",
            "RIGHT_EYE",
            "UPPER_LIP_TOP",
            "UPPER_LIP_BOTTOM",
            "LOWER_LIP_TOP",
            "LOWER_LIP_BOTTOM",
            "NOSE_BRIDGE",
            "NOSE_BOTTOM",
            "LEFT_CHEEK",
            "RIGHT_CHEEK"
        )

        val faceContoursTypesMap = mutableMapOf<String, Any>()

        for (i in faceContoursTypesStrings.indices) {
            val contour = face.getContour(faceContoursTypes[i]) ?: continue
            val points = contour.points
            val pointsArray = points.map { point ->
                mapOf("x" to point.x.toDouble(), "y" to point.y.toDouble())
            }
            faceContoursTypesMap[faceContoursTypesStrings[contour.faceContourType - 1]] =
                pointsArray
        }

        return faceContoursTypesMap
    }

    private fun cropFace(inputImage: InputImage, boundingBox: Rect): Bitmap? {
        val bitmap = inputImage.bitmapInternal ?: return null

        // Clamp bounding box to bitmap dimensions
        val clampedRect = Rect(
            boundingBox.left.coerceAtLeast(0),
            boundingBox.top.coerceAtLeast(0),
            boundingBox.right.coerceAtMost(bitmap.width),
            boundingBox.bottom.coerceAtMost(bitmap.height)
        )

        return Bitmap.createBitmap(
            bitmap,
            clampedRect.left,
            clampedRect.top,
            clampedRect.width(),
            clampedRect.height()
        )
    }

    fun detectFace(image: Image): FaceInfo? {
        val inputImage = InputImage.fromMediaImage(image, 90)
        val task = faceDetector.process(inputImage)
        val faceList = mutableListOf<FaceInfo>()
//        val gson = Gson()

        val faces = Tasks.await(task)
        println("dang co ${faces.size} khuon mat");

        for (face in faces) {
            val rollAngle = face.headEulerAngleZ
            val pitchAngle = face.headEulerAngleX
            val yawAngle = face.headEulerAngleY

            val faceInfo = FaceInfo(
                roll = rollAngle,
                pitch = pitchAngle,
                yaw = yawAngle,
                bound = face.boundingBox
            )

//                    map["leftEyeOpenProbability"] = face.leftEyeOpenProbability?.toDouble() ?: 0.0
//                    map["rightEyeOpenProbability"] = face.rightEyeOpenProbability?.toDouble() ?: 0.0
//                    map["smilingProbability"] = face.smilingProbability?.toDouble() ?: 0.0
//            map["contours"] = processFaceContours(face)
//            map["bounds"] = processBoundingBox(face.boundingBox)
            faceList.add(faceInfo)
        }

        return if (faceList.size > 0) faceList[0]
        else null;

//        return gson.toJson(faceList)
    }
}