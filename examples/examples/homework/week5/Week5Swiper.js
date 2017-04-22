import React, {Component} from 'react'

import Swiper from "./Swiper"

export default class Week5Swiper extends Component{


  render(){

    return <View style={{flex : 1}}>
      <Swiper>
        <Image source={{uri : "http://www.ikuku.cn/wp-content/uploads/user/u1497/POST/p230139/1426926892710120-818x545.jpg"}} />
        <Image source={{uri : "http://www.ikuku.cn/wp-content/uploads/user/u1497/POST/p230139/1426925837151974-1024x682.jpg"}} />
        <Image source={{uri : "http://www.ikuku.cn/wp-content/uploads/user/u1497/POST/p230139/1426925829163157-1024x682.jpg"}} />
      </Swiper>
    </View>
  }
}
