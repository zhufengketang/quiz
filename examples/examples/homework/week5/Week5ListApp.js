import React, {Component} from 'react'

import {StackNavigator} from 'react-navigation'

/**
 * React Navigation 文档
 * https://reactnavigation.org/docs/intro/
 */

export default (StackNavigator({
  Home : {
    screen : require("./Week5ListView").default,
    navigationOptions : {
      title : "课程列表"
    }
  },
  Week5CourseDetail : {
    screen : require("./Week5CourseDetail").default,
    navigationOptions : {
      title : (navigation) => {
        return  `${navigation.state.params.course.title}`
      }
    }
  }
}))
