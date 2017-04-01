/**
 * CSS盒子模型DEMO
 */

import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class BoxExample extends Component{
  render(){
    return <View style={styles.outer}>
      <View style={[styles.inner, {borderColor : "yellow"}]}>
        <Text style={{color : 'white'}}>Hello Word!</Text>
      </View>
    </View>
  }
}


const styles = StyleSheet.create({
  outer : {
    borderWidth : 3,
    backgroundColor : 'green',
    borderColor : "pink"
  },
  inner : {
    borderWidth : 3,
    borderColor : 'red',
    margin : 10,
    padding : 20
  }
})
