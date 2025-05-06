package com.anonymous.rnai.domain;

/*
 * Copyright 2020 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ImageFormat;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.Image;
import android.util.Base64;

import com.google.mlkit.vision.common.InputImage;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import java.util.Arrays;


/**
 * Utils functions for bitmap conversions.
 */
public class BitmapUtils {
    public static Bitmap convertYuvToRgba(Image image) throws Exception {
        if (image == null) {
//            return "";
            throw new Exception("No image");
        }

        // Prepare YUV data in NV21 format
        int width = image.getWidth();
        int height = image.getHeight();
        Image.Plane[] planes = image.getPlanes();

        byte[] nv21;
        ByteBuffer yBuffer = planes[0].getBuffer();
        ByteBuffer uBuffer = planes[1].getBuffer();
        ByteBuffer vBuffer = planes[2].getBuffer();

        int ySize = yBuffer.remaining();
        int uSize = uBuffer.remaining();
        int vSize = vBuffer.remaining();

        nv21 = new byte[ySize + uSize + vSize];

        // Copy Y channel
        yBuffer.get(nv21, 0, ySize);

        // UV planes are interleaved in NV21 format, so swap U and V
        byte[] uBytes = new byte[uSize];
        byte[] vBytes = new byte[vSize];
        uBuffer.get(uBytes);
        vBuffer.get(vBytes);

        for (int i = 0; i < uSize; i++) {
            nv21[ySize + (i * 2)] = vBytes[i];
            nv21[ySize + (i * 2) + 1] = uBytes[i];
        }

        // Convert NV21 byte array to Bitmap
        YuvImage yuvImage = new YuvImage(nv21, ImageFormat.NV21, width, height, null);
        ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
        yuvImage.compressToJpeg(new Rect(0, 0, width, height), 100, jpegOutputStream);

        byte[] jpegData = jpegOutputStream.toByteArray();
        Bitmap bitmap = BitmapFactory.decodeByteArray(jpegData, 0, jpegData.length);

        // Ensure the bitmap is ARGB_8888
        Bitmap rgbaBitmap = bitmap.copy(Bitmap.Config.ARGB_8888, true);

        // Rotate bitmap 90 degrees
        Matrix matrix = new Matrix();
        matrix.postRotate(90);  // Rotate 90 degrees

        return Bitmap.createBitmap(rgbaBitmap, 0, 0, rgbaBitmap.getWidth(), rgbaBitmap.getHeight(), matrix, true);
    }

    public static Bitmap convertInputImageToBitmap(InputImage inputImage) {
        // Check if the InputImage is in Bitmap format
        Bitmap bitmap = null;

        try {
            // Check if the InputImage was created from ByteBuffer
            if (inputImage.getByteBuffer() != null) {
                ByteBuffer byteBuffer = inputImage.getByteBuffer();
                byte[] imageBytes = byteBuffer.array();
                bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.length);
            } else {
                System.out.println("Khong co bytebuffer");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Loi bo  me ra");
        }

        return bitmap;
    }

    public static Bitmap cropFace(Image image, Rect boundingBox) throws Exception {
        Bitmap bitmap = convertYuvToRgba(image);
        if (bitmap == null) {
            System.out.println("No image inside");
            return null;
        }

        int width = boundingBox.width();
        int height = boundingBox.height();
        int newSize = Math.max(width, height);

        int paddingX = (newSize - width) / 2;
        int paddingY = (newSize - height) / 2;

        int left_ = boundingBox.left - paddingX;
        int right_ = boundingBox.right + paddingX;
        int bottom_ = boundingBox.bottom + paddingY;
        int top_ = boundingBox.top - paddingY;

        // Clamp bounding box to bitmap dimensions
        int left = Math.max(left_, 0);
        int top = Math.max(top_, 0);
        int right = Math.min(right_, bitmap.getWidth());
        int bottom = Math.min(bottom_, bitmap.getHeight());

        Rect clampedRect = new Rect(left, top, right, bottom);

        return Bitmap.createBitmap(
                bitmap,
                clampedRect.left,
                clampedRect.top,
                clampedRect.width(),
                clampedRect.height()
        );
    }

    public static String bitmapToBase64(Bitmap bitmap) {
        ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, pngOutputStream);

        byte[] pngData = pngOutputStream.toByteArray();
        return Base64.encodeToString(pngData, Base64.NO_WRAP);
    }
}