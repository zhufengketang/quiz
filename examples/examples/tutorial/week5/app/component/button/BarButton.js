import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class BarButton extends Component{

  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btn}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  btn : {
    height : 40,
    justifyContent : 'center',
    backgroundColor : 'white',
    borderBottomWidth : StyleSheet.hairlineWidth
  }

})
