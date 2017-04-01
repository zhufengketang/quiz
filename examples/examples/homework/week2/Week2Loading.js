import React, {Component} from 'react'

import {View, ActivityIndicator} from 'react-native'


export default class Week2Loading extends Component {

  render(){
    return <View style={{flex : 1,
      backgroundColor : "white",
      justifyContent : 'center',
      alignItems : 'center'}}>
      <ActivityIndicator />
    </View>
  }
}
