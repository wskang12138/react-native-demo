package com.awesomeproject

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen
import android.webkit.WebView;
import android.webkit.WebViewClient;

class MainActivity : ReactActivity() {
    
    companion object {
        var preloadedReactRootView: ReactRootView? = null
    }
    private lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this, R.id.lottie) // Show splash screen immediately
        SplashScreen.setAnimationFinished(true)
        super.onCreate(savedInstanceState)
 
        webView = WebView(this)
        webView.webViewClient = WebViewClient() // Ensure links open within the WebView itself
        val webSettings = webView.settings
        webView.getSettings().setJavaScriptEnabled(true);
        webSettings.allowFileAccess = true // Set to allow file access
        webSettings.javaScriptEnabled = true // If you need JavaScript enabled, set this 
        setContentView(webView)

        if (preloadedReactRootView == null) {
            preloadedReactRootView = ReactRootView(this).apply {
                startReactApplication(
                    reactNativeHost.reactInstanceManager,
                    mainComponentName,
                    null
                )
            }
        }

        setContentView(preloadedReactRootView)
    }

    override fun getMainComponentName(): String = "AwesomeProject"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
