import React, {Component} from 'react'

import {View, Text} from 'react-native'

import DragContainer from "./DragContainer"


/**
 * 讲解手势组件的用法
 * 中文文档 :http://reactnative.cn/docs/0.43/panresponder.html#content
 */


const flexCenter = {
  alignItems : 'center',
  justifyContent : 'center'
}
export default class Week5Gesture extends Component{

  render(){

    return <View style={{flex : 1}}>

      <DragContainer
        top={10}
        left={10}
        name='d1'
        style={{width : 200, height : 200, backgroundColor : 'yellow'}}
      >
          <DragContainer
            name='d2'


            style={{width : 100, height : 100, backgroundColor : 'green'}}>
            <View>
              <Text style={{fontSize : 30}}>Inner</Text>
            </View>
          </DragContainer>
      </DragContainer>

    </View>
  }

}
