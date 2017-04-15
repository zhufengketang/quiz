/**
 * 最简单的组件封装
 * 定义属性/检查类型
 */

import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native'

import CustomButton from "./CustomButton"


export default class Week5Component1 extends Component {

  _press = () => {
    Alert.alert("hi!")
  }

  _greetings = () => {
    this.refs.btn1.greetings()
  }

  render() {
    return <View style={{flexDirection : 'row'}}>
      <CustomButton
        ref='btn1'
        onPress={this._press}
        backgroundColor="yellow"
        >Please Press ME!</CustomButton>


    <CustomButton
        onPress={this._greetings}
        color="blue"
        backgroundColor="purple"
        >Press ME!</CustomButton>

    </View>
  }
}
