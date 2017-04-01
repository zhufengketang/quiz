import React, {Component} from 'react'
import {View} from 'react-native'

export default class FloatingAndZIndexExample extends Component {

  render(){
    return <View style={{height : 1000, backgroundColor : 'green'}}>
      <View style={{
        width : 100,
        height : 100,
        backgroundColor : "yellow"
      }}></View>

      <View style={{
        zIndex : 1,
        position : 'absolute',
        right : 10,
        width : 100,
        height : 100,
        backgroundColor : "#540021"
      }}></View>

      <View style={{
        position : 'absolute',
        right : 0,
        width : 100,
        height : 100,
        backgroundColor : "#0079ff"
      }}></View>

    </View>
  }
}
