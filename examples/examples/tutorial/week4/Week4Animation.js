import React, {Component} from 'react'

import {StatusBar, View, Text, Image, Button, Dimensions} from 'react-native'

import ensure_lock from "./ensure_lock"


const interpolate = (rangeA, rangeB) => {
  return (value) => {
    const r = (rangeB[1] - rangeB[0]) / (rangeA[1] - rangeA[0])
    return rangeB[0] + r *  (value - rangeA[0])
  }
}

const linear = (t) => {
  return t
}

const slow_down = (t) => {
  return 2 * t - t * t
}

const f3 = (t) => {
  return 0.1 * t + 0.4 * t*t + 0.5 * t*t*t
}

const animate = (duration, easingFunc, callback) => {
  const i_time = interpolate([0, duration], [0, 1])
  const t_start = new Date().getTime()
  const _inner = () => {
    requestAnimationFrame( () => {
      let t_diff = new Date().getTime() - t_start
      if(t_diff >= duration) {
        t_diff = duration
      }
      // 运动函数时间
      const t = i_time(t_diff)
      const d = easingFunc(t)
      callback(d, t_diff === duration ? null :  _inner )
    })
  }
  _inner()
}


export default class Wee4Animation extends Component{

  constructor(){
    super()

    this.state = {
      animatedValue : 0
    }

    this._play = ensure_lock(this._play)
  }



  _play = (done) => {
    this.setState({
      animatedValue : 0
    }, () => {
      animate(500, f3, (value, next) => {
        this.setState({
          animatedValue : value
        }, () => {
          next && next()
          if(!next) {
            done()
          }
        })
      })
    })
  }



  render(){

    const i_func = interpolate([0, 1], [-100, Dimensions.get('window').height / 2 - 45])

    return <View style={{flex:1}}>
      <StatusBar hidden={true} />
      <View style={{
        position : 'absolute',
        left : Dimensions.get('window').width /2  - 45,
        top : i_func(this.state.animatedValue),
        width : 90, height : 90,
        overflow : 'hidden'}}>
        <Image
          borderRadius={45}
          source={require("./logo.png")} style={{width : 90, height : 90}} />

      </View>

      <View style={{position : 'absolute', bottom : '10%', width : '100%',  alignItems : 'center', justifyContent : 'center'}}>
        <View style={{width : 150}}>
          <Button width={150} onPress={this._play} title='replay'></Button>
        </View>
      </View>
    </View>
  }
}
