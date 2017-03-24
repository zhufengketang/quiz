import React, {Component} from 'react'

import {View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native'

export default class EventExample extends Component{


  _press = (x) => {

    return () => {

      Alert.alert("hi")
    }
  }

  _change = (text) => {
    console.log(text)
  }
  render(){

    return <View>
        <TouchableHighlight

          onPress={this._press(1)}
          style={{borderRadius : 50,
          alignItems : 'center', justifyContent : 'center',
          width : 100, height : 100, backgroundColor : 'red'}}>
          <Text style={{color : 'white', fontSize : 16}}>Press Me!</Text>
        </TouchableHighlight>

        <TextInput placeholder="Input here" onChangeText={this._change} />
    </View>
  }
}
