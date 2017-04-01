import React, {Component} from 'react'

import {View, Text,Image, Dimensions, TextInput, Button, StyleSheet} from 'react-native'


export default class Week2Login extends Component {


  render(){
    return <View style={{flex : 1}}>

      <View style={{justifyContent : 'center', alignItems : 'center', marginTop : '30%'}}>
        <Image
          style={{width : 100, height : 100}}
          source={{uri : 'http://cdn.viposs.com/mengyedog_com/20160807/1611478347.jpg?imageView2/1/w/270/h/270/q/92|watermark/1/image/aHR0cDovLzd2aWpray5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9tZW5neWVkb2dfY29tLzIwMTYxMjA5LzE4NTk0MzE0NTcucG5nP2ltYWdlVmlldzIvMi93LzI0My9xLzky/dissolve/60/gravity/SouthEast/dx/0/dy/10'}} />

      </View>

      <View style={{justifyContent : 'center', alignItems : 'center', width : '100%'}}>
        <View style={styles.iptW}>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.input} placeholder='请输入用户名' />
        </View>
        <View style={styles.iptW}>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.input} placeholder='请输入密码' />
        </View>
      </View>

      <View style={{justifyContent : 'center', alignItems : 'center', marginTop : 20}}>
        <View style={{width : 100}}>
          <Button title='Submit' onPress={() => {}} style={{width : 100}} />
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  iptW : {
    borderBottomWidth : 1,
    borderBottomColor : '#eee'
  },
  input : {
    height : 50, width : '60%', textAlign : 'center'
  }
})
