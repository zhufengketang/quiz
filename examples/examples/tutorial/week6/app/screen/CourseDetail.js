import React, {Component} from 'react'
import {View, Text} from 'react-native'


export default class CourseDetail extends Component{

  render(){

    const course = this.props.navigation.state.params.course
    const {title, author} = course
    return <View>

      <Text>{title}</Text>
      <Text>{author}</Text>

    </View>
  }
}
