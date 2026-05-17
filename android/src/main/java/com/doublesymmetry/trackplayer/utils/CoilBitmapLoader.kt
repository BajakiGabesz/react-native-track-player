package com.doublesymmetry.trackplayer.utils

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.drawable.BitmapDrawable
import android.net.Uri
import android.os.Build
import androidx.media3.common.util.BitmapLoader
import androidx.media3.common.util.Util.isBitmapFactorySupportedMimeType
import androidx.media3.common.util.UnstableApi
import coil.ImageLoader
import coil.request.ImageRequest
import com.lovegaoshi.kotlinaudio.utils.getEmbeddedBitmap
import com.google.common.util.concurrent.ListenableFuture
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.guava.future
import java.io.IOException
import kotlin.math.min
import javax.inject.Inject

// https://github.com/androidx/media/issues/121

@UnstableApi
class CoilBitmapLoader @Inject constructor(
    private val context: Context,
    private val cropSquare: Boolean = false,
) : BitmapLoader {

    private val scope = MainScope()
    private val imageLoader = ImageLoader(context)

    override fun supportsMimeType(mimeType: String): Boolean {
        return isBitmapFactorySupportedMimeType(mimeType)
    }

    override fun decodeBitmap(data: ByteArray): ListenableFuture<Bitmap> {
        val bitmap = BitmapFactory.decodeByteArray(data,  /* offset= */0, data.size)
        return scope.future {
            bitmap ?: throw IOException("Unable to decode bitmap")
        }
    }

    override fun loadBitmap(uri: Uri): ListenableFuture<Bitmap> = scope.future {
        val bitmap = runCatching {
            val parsedUri = uri.toString()
            if (parsedUri.startsWith("file://")) {
                getEmbeddedBitmap(parsedUri.substring(7))
            } else {
                val request = ImageRequest.Builder(context)
                    .data(uri)
                    .allowHardware(false)
                    .build()
                val response = imageLoader.execute(request)
                (response.drawable as? BitmapDrawable)?.bitmap
            }
        }.getOrNull()

        sanitizeBitmap(bitmap)

    }

    private fun sanitizeBitmap(bitmap: Bitmap?): Bitmap {
        var output = bitmap ?: Bitmap.createBitmap(1, 1, Bitmap.Config.RGB_565)

        if (output.isRecycled || output.width <= 0 || output.height <= 0) {
            return Bitmap.createBitmap(1, 1, Bitmap.Config.RGB_565)
        }

        if (Build.MANUFACTURER.equals("samsung", ignoreCase = true) || cropSquare) {
            output = safeCenterCropSquare(output)
        }

        return output
    }

    private fun safeCenterCropSquare(source: Bitmap): Bitmap {
        val side = min(source.width, source.height)
        if (side <= 0) {
            return Bitmap.createBitmap(1, 1, Bitmap.Config.RGB_565)
        }

        val x = ((source.width - side) / 2).coerceAtLeast(0)
        val y = ((source.height - side) / 2).coerceAtLeast(0)

        return runCatching {
            Bitmap.createBitmap(source, x, y, side, side)
        }.getOrElse {
            source
        }
    }
}
