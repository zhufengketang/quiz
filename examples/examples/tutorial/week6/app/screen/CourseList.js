console.log("----aaa")
import React, {Component} from 'react'


import {View, ListView, ActivityIndicator} from 'react-native'

import {CourseCardBig} from "component"

import {LoadingContainer} from "container"

import {get_course} from "api"

export default class CourseList extends Component{


  _press = (rowData) => {
    return () => {
      this.props.navigation.navigate("CourseDetail", {course : rowData})
    }
  }

  render(){
    return <LoadingContainer
      type="ds"
      getListData={data => data.courses}
      request={get_course}
      >
      <ListView
        renderRow={rowData => <CourseCardBig onPress={ this._press(rowData)} {...rowData} />}
      />
    </LoadingContainer>
  }
}
