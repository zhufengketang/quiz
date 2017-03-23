import React, {Component} from 'react'

import {View,
  Image,
  Text,
  TextInput,
  TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native'

export default class EventExample extends Component{

  render(){

    return <View>

      <View style={{borderRadius : 50,
        alignItems : 'center', justifyContent : 'center',
        width : 100, height : 100, backgroundColor : 'red'}}>
        <Text style={{color : 'white', fontSize : 16}}>Press Me!</Text>
      </View>
    </View>
  }
}
