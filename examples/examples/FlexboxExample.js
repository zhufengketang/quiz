import React, {Component} from 'react'

import {View, Text,
  ScrollView, Alert,
  ActivityIndicator}  from 'react-native'

const range = (n) => {
  return [...Array(n)].map( (_, i) => i)
}
export default class FlexboxExample extends Component{

  constructor(props){
    super()
  }
  render(){

    return <ScrollView>
      <Text style={{fontSize : 24, color : "black"}}>
        FlexDirection示例 - Horizontal
      </Text>

      <View style={{flexDirection : 'row', flexWrap : 'wrap', width : 200}}>

      {range(20).map( i => {
            let color =
              Math.floor(Math.random() * 255 * 255 * 255)
                .toString(16)

            color += Array(6 - color.length + 1).join("0")
            color = "#" + color
            return <View
              key={i}
              style={{
                width : 30,
                height : 30,
                backgroundColor : color}} />
          })}
      </View>


      <Text style={{fontSize : 24, color : "black"}}>
        FlexDirection示例 - Verical
      </Text>


      <View style={{flexDirection : 'column'}}>

        {range(5).map( i => {
              let color =
                Math.floor(Math.random() * 255 * 255 * 255).toString(16)
              color += Array(6 - color.length + 1).join("0")
              color = "#" + color
              return <View
                key={i}
                style={{
                  height : 30,
                  backgroundColor : color}} />
            })}
      </View>


      <Text style={{fontSize : 24, color : "black"}}>
        FlexGrow示例
      </Text>

      <View style={{flexDirection:'row'}}>
        <View style={{flex : 1, height : 50, backgroundColor : "#123456"}} />
        <View style={{flex : 4, height : 50, backgroundColor : "#654321"}} />
        <View style={{flex : 1, height : 50, backgroundColor : "#5643ff"}} />
      </View>


      <Text style={{fontSize : 24, color : "black"}}>
        FlexShrink
      </Text>

      {
        // 超出部分 700
        // { 200 * 1.1 / (200 * 1.1 + 300 * 1 + 400 * 1) } * 700 -44

      }
      <View style={{flexDirection : 'row'}}>
        <View style={{flexShrink : 1.1, width : 200, height : 50, backgroundColor : "#123456"}}><Text>1</Text></View>
        <View style={{flexShrink : 1, width : 300, height : 50, backgroundColor : "#654321"}} />
        <View style={{flexShrink : 1, width : 400, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <Text style={{fontSize : 24, color : "black"}}>
        JustifyContent 示例
      </Text>

      <View style={{width: 200, backgroundColor : "yellow", flexDirection : 'row', justifyContent : 'flex-start'}}>
        <View style={{width : 20, height : 50, backgroundColor : "#123456"}} />
        <View style={{width : 20, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <View style={{width: 200, flexDirection : 'row', justifyContent : 'flex-end'}}>
        <View style={{width : 20, height : 50, backgroundColor : "#123456"}} />
        <View style={{width : 20, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <View style={{width: 200, flexDirection : 'row', justifyContent : 'center'}}>
        <View style={{width : 20, height : 50, backgroundColor : "#123456"}} />
        <View style={{width : 20, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <View style={{width: 200, flexDirection : 'row', justifyContent : 'space-around'}}>
        <View style={{width : 20, height : 50, backgroundColor : "#123456"}} />
        <View style={{width : 20, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <View style={{width: 200, flexDirection : 'row', justifyContent : 'space-between'}}>
        <View style={{width : 20, height : 50, backgroundColor : "#123456"}} />
        <View style={{width : 20, height : 50, backgroundColor : "#5643ff"}} />
      </View>

      <Text style={{fontSize : 24, color : "black"}}>
        alignItems & justifyContent
      </Text>

      <View style={{
        height : 100, backgroundColor : "#eee",
        alignItems : 'flex-start',
        justifyContent : 'center',
        borderBottomWidth : 1,
        borderColor : 'black'
      }}>
      <ActivityIndicator />
      </View>

      <View style={{height : 100, backgroundColor : "#eee",
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : 1,
        borderColor : 'black'
      }}>
        <ActivityIndicator />
      </View>


      <View style={{height : 100, backgroundColor : "#eee",
        alignItems : 'flex-end',
        justifyContent : 'flex-end',
        borderBottomWidth : 1,
        borderColor : 'black'
      }}>
        <ActivityIndicator />
      </View>


      <Text style={{fontSize : 24, color : "black"}}>
          Align Self
      </Text>

      <View style={{
        height : 100,
        backgroundColor : "#ccc",
        alignItems : 'center',
        flexDirection : 'row'}}>
        <View style={{flex : 1, height : 20, backgroundColor: 'red' }} />
        <View style={{flex : 1, alignSelf : 'flex-start', height : 20, backgroundColor: 'blue' }} />
        <View style={{flex : 1, height : 20, backgroundColor: 'yellow' }} />
      </View>

    </ScrollView>
  }
}
