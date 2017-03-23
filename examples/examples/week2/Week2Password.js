import React, {Component} from 'react'

import {View, Text, Dimensions} from 'react-native'


export default class Week2Password extends Component {


  render(){
    return <View style={{
      position : 'absolute',
      width : '100%',
      height : '100%',
      justifyContent : 'center',
      alignItems : 'center'}}>


      <View style={{width : '100%', height : '100%',
        backgroundColor : 'black',
        position : 'absolute',
        opacity : 0.5,
        top : 0, left : 0}}>
      </View>

      <View style={{borderRadius : 5,
        backgroundColor : 'white', width : '80%', paddingTop : 40, paddingBottom : 40}}>

        <View style={{alignItems : 'center', justifyContent : "center"}}>
          <Text style={{fontSize : 24, color : 'black', fontWeight : 'bold', marginBottom : 10}}>请输入六位交易密码</Text>
        </View>

        <View style={{flexDirection : 'row', justifyContent: 'center'}}>
          {[1,2,3,4,5,6].map( (n, i) => {
            return <View key={i} style={{
              alignItems : 'center',
              width : 36,
              height : 36,
              borderWidth : 1,
              borderLeftWidth : i === 0 ? 1 : 0,
              justifyContent : 'center'}}>

            </View>
          })}

        </View>


      </View>


    </View>
  }
}
