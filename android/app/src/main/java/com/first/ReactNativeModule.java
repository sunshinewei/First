package com.first;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2017/4/2 0002.
 */

public class ReactNativeModule extends ReactContextBaseJavaModule {
    private Context mContext;
    public ReactNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext=reactContext;
    }

    @Override
    public String getName() {
        return "reactNative";//在React Native调用方法时根据这个名字
    }

    //此方法没有返回值
    @ReactMethod
    public void callAndroidNative(String msg){
        Toast.makeText(mContext,msg,Toast.LENGTH_LONG).show();
    }
}
