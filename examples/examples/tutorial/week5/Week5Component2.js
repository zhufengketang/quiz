/**
 * 演示React内部属性传递的机制
 */

import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native'

import CustomButton from "./CustomButton"
import ButtonGroup from "./ButtonGroup"



export default class Week5Component1 extends Component {

  _press = () => {
    Alert.alert("hi!")
  }

  render() {
    return <View style={{flexDirection : 'row'}}>
      <ButtonGroup color='green'>
        <CustomButton>首页</CustomButton>
        <CustomButton>个人中心</CustomButton>
      </ButtonGroup>
    </View>
  }
}
