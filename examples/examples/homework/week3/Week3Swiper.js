import React, {Component} from 'react'

import {View, ViewPagerAndroid, Platform, ScrollView, Image, Dimensions} from 'react-native'


const images = [
  'http://pic11.nipic.com/20101214/213291_155243023914_2.jpg',
  'http://scimg.jb51.net/allimg/150629/14-1506291A242927.jpg',
  'http://scimg.jb51.net/allimg/151228/14-15122Q60431W4.jpg'
]
export default class Week3Swiper extends Component{

  constructor() {
    super()
  }

  render(){

    return <View style={{flex : 1}}>

      {Platform.OS === 'ios' ?
      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        style={{width : '100%', height : 200}} >
        {images.map( (img, i) => {
          return <View key={i} >
            <Image style={{width : Dimensions.get('window').width, height : 200}} source={{uri : img}} />
          </View>
        })}
      </ScrollView>
      :
      <ViewPagerAndroid style={{flex : 1}} initialPage={0}>
        {images.map( (img, i) => {
          return <View key={i} style={{width : Dimensions.get("window").width, height : 200}} >
            <Image style={{width : Dimensions.get('window').width, height : 200}} source={{uri : img}} />
          </View>
        })}
      </ViewPagerAndroid>
    }

    </View>

  }
}
