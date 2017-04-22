import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {BarButton} from "component"


export default class Home extends Component{

  _goto = name => {
    return () => {
      this.props.navigation.navigate(name)
    }
  }
  render(){
    return <View>
      <BarButton onPress={this._goto("Page1")}>
        <Text>Page 1</Text>
      </BarButton>

      <BarButton onPress={this._goto("Page2")}>
        <Text>Page 2</Text>
      </BarButton>
    </View>

  }
}
