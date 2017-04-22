import React, {Component} from 'react'


import {View, ListView, ActivityIndicator} from 'react-native'

import CourseCardBig from "./CourseCardBig"


export default class Week5ListView extends Component{

  constructor(){
    super()
    this.state = {
      list : null
    }
  }

  componentWillMount(){

    fetch("https://ketang.zhufengpeixun.cn/course", {
      method : "GET"
    }).then(response => {
      return response.json()
    }).then( json => {
      const ds = new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2})
      this.setState({
        list : ds.cloneWithRows(json.data.courses)
      })
    })
  }

  _press = (rowData) => {

    return () => {
      this.props.navigation.navigate("Week5CourseDetail", {course : rowData})

    }

  }

  render(){

    const {list} = this.state

    if(!list) { // 没有数据，显示Loading页面
      return <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
        <ActivityIndicator />
      </View>
    }

    return <View style={{flex : 1}}>
      <ListView
        dataSource={list}
        renderRow={rowData => <CourseCardBig onPress={ this._press(rowData)} {...rowData} />}
      />
    </View>


  }
}
