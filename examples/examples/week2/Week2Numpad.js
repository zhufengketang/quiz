import React, {Component} from 'react'

import {View, Text, Dimensions} from 'react-native'


export default class Week2Numpad extends Component {


  render(){
    const W = Dimensions.get('window').width
    const H = Dimensions.get('window').height
    return <View style={{flex : 1,
      backgroundColor : "white",
      justifyContent : 'center',
      alignItems : 'center'}}>

      <View style={{flexDirection : 'row', flexWrap : 'wrap', borderWidth : 1}}>
        {[1,2,3,4,5,6,7,8,9].map( (n, i) => {
          return (
            <View key={i} style={{
              width : (W - 60) / 3,
              height : (W - 60) / 3,
              backgroundColor : "#f3f4f5",
              alignItems : 'center',
              borderRightWidth : (i + 1) % 3 == 0 ? 0 : 1,
              borderBottomWidth : (i < 6) == 0 ? 0 : 1,
              justifyContent : 'center'}}>
              <Text style={{fontSize : 30}}>{n}</Text>
            </View>
          )
        })}
      </View>

    </View>
  }
}
