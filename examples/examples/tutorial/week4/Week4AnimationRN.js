import React, {Component} from 'react'

import {StatusBar, View, Text,
  Easing,
  Animated, Image, Button, Dimensions} from 'react-native'

import ensure_lock from "./ensure_lock"

export default class Wee4AnimationRN extends Component{

  constructor(){
    super()
    this.state = {
      animatedValue : new Animated.Value(0)

    }
  }

  _play = (done) => {

    this.state.animatedValue.setValue(0)
    Animated.spring(
      this.state.animatedValue, {
        toValue : 1,
        friction : 2,
      }).start(done)
  }


  render(){

    return <View style={{flex:1}}>
      <StatusBar hidden={true} />
      <Animated.View style={{
        position : 'absolute',
        left : Dimensions.get('window').width /2  - 45,
        top : this.state.animatedValue.interpolate({
          inputRange : [0, 1],
          outputRange : [-100, Dimensions.get("window").height / 2 - 45]
        }),
        width : 90, height : 90,
        overflow : 'hidden'}}>
        <Image
          borderRadius={45}
          source={require("./logo.png")} style={{width : 90, height : 90}} />

      </Animated.View>

      <View style={{position : 'absolute', bottom : '10%', width : '100%',  alignItems : 'center', justifyContent : 'center'}}>
        <View style={{width : 150}}>
          <Button width={150} onPress={ensure_lock(this._play)} title='replay'></Button>
        </View>
      </View>
    </View>
  }
}
