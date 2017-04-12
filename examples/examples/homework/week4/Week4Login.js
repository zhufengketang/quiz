import React, {Component} from 'react'
import {View, Text,Image,
  Animated,
  Easing,
  Dimensions, TextInput, Button,
  StyleSheet, Keyboard, Platform} from 'react-native'

export default class Week4Login extends Component {

  constructor(){
    super()

    this.state = {
      float : false,
      animatedValue : new Animated.Value(0)
    }
  }

  // 向上收起
  _play(){

    this.setState({
      float : true
    }, () => {
      Animated.timing(this.state.animatedValue, {
        duration : 300,
        toValue : 1,
        ease : Easing.ease
      }).start()
    })
  }

  // 向下展开
  _play_back(){

    Animated.timing(this.state.animatedValue, {
      duration : 300,
      toValue : 0,
      ease : Easing.ease
    }).start( () => {
      this.setState({
        float : false
      })
    })
  }

  componentWillMount () {

    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
   }

   componentWillUnmount () {
     this.keyboardDidShowListener.remove()
     this.keyboardDidHideListener.remove()
     this.keyboardWillShowListener.remove()
   }

   _keyboardWillShow = () => {
     Platform.OS === 'ios' && this._play()
   }

   _keyboardDidShow = () => {
     Platform.OS === 'android' && this._play()
   }

   _keyboardDidHide = () => {
     this._play_back()
   }

   _layout = (e) => {
     this.top =  e.nativeEvent.layout.y
   }


  render(){
    const {showKeyboard} = this.state
    return <View style={{flex : 1}}>


      {/* 图片 */}
      <View style={{justifyContent : 'center', alignItems : 'center', marginTop : '30%'}}>
        <Animated.View style={{opacity : this.state.animatedValue.interpolate({
          inputRange : [0, 1] ,
          outputRange : [1, 0]
        })}}>
          <Image
            style={{width : 100, height : 100}}
            source={{uri : 'http://cdn.viposs.com/mengyedog_com/20160807/1611478347.jpg?imageView2/1/w/270/h/270/q/92|watermark/1/image/aHR0cDovLzd2aWpray5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9tZW5neWVkb2dfY29tLzIwMTYxMjA5LzE4NTk0MzE0NTcucG5nP2ltYWdlVmlldzIvMi93LzI0My9xLzky/dissolve/60/gravity/SouthEast/dx/0/dy/10'}} />
        </Animated.View>

      </View>


      {/* 输入框 */}
      <Animated.View onLayout={this._layout}
        style={{position : this.state.float ? 'absolute' : 'relative',
          zIndex : 1,
          top : this.state.float ? this.state.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : [this.top, 40]
          }) : undefined}}>
        <View style={{justifyContent : 'center', alignItems : 'center',
          width : '100%'}}
        >
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

      </Animated.View>
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
