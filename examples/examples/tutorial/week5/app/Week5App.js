import React, {Component} from 'react'

import {StackNavigator} from 'react-navigation'


import {Home, Page1, Page2} from 'screen'

/**
 * 代表一个完整的APP
 * APP的入口
 * Navigator 参考文档 https://reactnavigation.org/docs/intro/
 * 目前没有中文资料
 */
 export default (
   StackNavigator({
     Home : {
       screen : Home,
       navigationOptions : {
         title : "首页"
       }
     },
     Page1 : {
       screen : Page1,
       navigationOptions : {
         title : "Page 1"
       }
     },
     Page2 : {

       screen : Page2,
       navigationOptions : {
         title : "Page 1"
       }
     }
   })
 )
