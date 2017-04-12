import React, {Component} from 'react'
import {View} from 'react-native'

import {AnimatedNumber} from "./AnimatedNumber"


export default class Week4Numbers extends Component{

  render(){
    return <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <AnimatedNumber
        number="1239"
        fontStyle={{color : 'red', fontSize : 48, fontWeight : 'bold'}}
        duration={600}
        gap={300}
      />
    </View>
  }
}
