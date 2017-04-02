/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeModules,
  Image
} from 'react-native';

export default class First extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.call_button.bind(this)}>
          React Native 第一次接触
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TextInput style={styles.instructions}
                   password={true}
                   multiline ={true}/>
          <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={{flex:1,width:200, height:100, resizeMode: Image.resizeMode.contain}}/>
      </View>
    );
  }

  call_button(){
    NativeModules.reactNative.callAndroidNative('React Native调用原生的方法，成功啦');
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('First', () => First);