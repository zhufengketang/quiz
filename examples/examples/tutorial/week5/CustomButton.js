
import React, {Component} from 'react'

import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
export default class CustomButton extends Component {

  /**
   * 定义默认属性
   */
  static defaultProps = {
    color : '#333'
  }

  /**
   * 属性类型校验
   * 使用 React 使用 PropTypes
   */
  static propTypes = {
    color : React.PropTypes.string,
    backgroundColor : React.PropTypes.string,
    onPress : React.PropTypes.func,
    children : React.PropTypes.string
  }

  greetings(){
    Alert.alert("greetings")
  }

  render(){

    const {
      children,
      color,
      backgroundColor,
      onPress
    } = this.props

    return <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, {
        backgroundColor
      }]} >
      <Text style={{color, fontSize : 24}}>{children}</Text>
    </TouchableOpacity>
  }
}

const styles = {
  btn : {
    padding : 10
  }
}
