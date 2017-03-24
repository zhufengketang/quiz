import React, {Component} from 'react'

import {View, Text, Platform, StyleSheet, Image} from 'react-native'


export default class extends Component {

  render(){
    return <View style={{flex : 1, backgroundColor : "white"}}>
      {/* Header  */}
      <Header />

      <View style={{flex : 1, alignItems : "center", justifyContent : 'center'}} >
        <Image
          style={{width : 100, height : 80}}
          source={{uri : 'https://f10.baidu.com/it/u=1981748892,3031683197&fm=72'}} />
      </View>
      <Footer />


    </View>
  }
}



const Header = () => {
  return <View style={{
    height : Platform.OS === 'ios' ? 64 : 44,
    backgroundColor : "#12f223",
    borderBottomColor : "#eee",
    borderBottomWidth : 1}}>
    <View style={{
      marginTop : Platform.OS === 'ios' ? 20 : 0,
      height : 44,
      justifyContent : 'center',
      alignItems : 'center'}}>
      <Text style={{fontSize : 18}}>Header</Text>
    </View>
  </View>
}


const Footer = () => {
  const tabs = ['探索', '学习', '进步']
  return <View style={footStyles.container}>
    {tabs.map( (tab, i) => {
        return <View key={i} style={footStyles.tab}>
          <Text>{tab}</Text>
        </View>
    })}
  </View>
}


const footStyles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    height : 40,
    borderTopWidth : StyleSheet.hairlineWidth,
    borderTopColor : '#eee'
  },
  tab : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})
