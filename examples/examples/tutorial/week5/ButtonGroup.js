import React, {Component} from 'react'
import {View} from 'react-native'


export default class ButtonGroup extends Component{


  render(){
    return <View>

      {React.Children.map(this.props.children, (child, i) => {
        return React.cloneElement(child, { color : this.props.color })
      } )}
    </View>
  }

}
