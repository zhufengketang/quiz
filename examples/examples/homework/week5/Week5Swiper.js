import React, {Component} from 'react'

import Swiper from "./Swiper"
import {View, Image} from 'react-native'

export default class Week5Swiper extends Component{


  render(){

    return <View style={{flex : 1}}>
      <Swiper duration={300}>
        <Image source={{
          uri : "https://img13.360buyimg.com/da/jfs/t4720/298/1965394400/102414/a0d7b171/58f6b3e7Nf1fc04c3.jpg"}}
        />
        <Image source={{
          uri : "https://img14.360buyimg.com/da/jfs/t3130/286/9142636460/57549/1754530c/58cf3eefN4d520dc9.jpg"}} />
        <Image source={{
          uri : "https://img30.360buyimg.com/da/jfs/t4807/173/2029750908/150188/635a5d17/58f73577Ncf895739.jpg"}} />
      </Swiper>
    </View>
  }
}
