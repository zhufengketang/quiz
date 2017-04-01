import React, {Component} from 'react'
import {ScrollView, View,
  StatusBar, Text,Image, Dimensions, TextInput, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import deepEqual from 'deep-equal'
const contents = `
Facebook[1]  是美国的一个社交网络服务网站 ，于2004年2月4日上线,于2012年3月6日发布Windows版的桌面聊天软件Facebook Messenger[2-3]  。主要创始人为美国人马克·扎克伯格。Facebook是世界排名领先的照片分享站点，截至2013年11月每天上传约3.5亿张照片。截至2012年5月，Facebook拥有约9亿用户。
Facebook的总部设在硅谷的门洛帕克（Menlo Park）——1 Hacker Way[4-5]  。从2006年9月11日起，任何用户输入有效电子邮件地址和自己的年龄段，即可加入。
2015年8月28日，单日用户数突破10亿。[6]
Facebook自2009年以来一直被中国屏蔽，其被禁的原因有社会和政治等方面的因素，但Facebook也从未间断与中国科技企业界的联系，期望通过投资中国科技企业等方式获得中国政府的开闸。[7]
2016年6月8日，《2016年BrandZ全球最具价值品牌百强榜》公布，Facebook 排第5名。
2016年12月16日，Facebook上线谣言审核机制功能，它正在和一家专业机构“国际事实审核网络” (International Fact-Checking Network, IFCN) 合作，邀请该机构的缔约成员机构使用自己开发的工具，去评估信息流当中的信息真实性。[8]
2016年12月21日，Facebook推出音频直播。[9]
2017年2月，Brand Finance发布2017年度全球500强品牌榜单，Facebook排名第9。
Facebook的创办人是马克·扎克伯格（Mark Zuckerberg），他是哈佛大学的学生，之前毕业于阿兹利高中。最初，网站的注册仅限于哈佛学院的学生。在之后的两个月内，注册扩展到波士顿地区的其他高校，波士顿学院Boston College、波士顿大学Boston University、麻省理工学院、特福茨大学Tufts，以及罗切斯特大学Rochester、斯坦福Stanford、纽约大学NYU、西北大学和所有的常春藤名校。第二年，很多其他学校也被加入进来。最终，在全球范围内有一个大学后缀电子邮箱的人，如.edu，.ac，.uk等都可以注册。 Facebook Facebook 之后，在Facebook中也可以建立起高中和公司的社会化网络。
据2007年7月数据，Facebook在所有以服务于大学生为主要业务的网站中，拥有最多的用户：三千四百万活跃用户，包括在非大学网络中的用户。从2006年9月到2007年9月间，该网站在全美网站中的排名由第60名上升至第7名。同时Facebook是美国排名第一的照片分享站点，每天上载八百五十万张照片。2010年世界品牌500强：Facebook超微软居第一。
马克·扎克伯格是哈佛大学的学生时在Andrew McCollum和Eduardo Saverin的支持下，于2004年2月创办了“The Facebook”。月底半数以上的哈佛本科生已经成了注册用户。Dustin Moskovitz和Chris Hughes加入，帮助网站的推广，将Facebook扩展到麻省理工学院、波士顿大学和波士顿学院。扩展一直持续到2004年4月，包括了所有常春藤院校和其他一些学校。之后的一个月，Zuckerberg[12]  ，McCollum和Moskovitz搬到加利福尼亚州的Palo Alto市（译者：斯坦福大学所在地，硅谷的发源地），在Adam D'Angelo和Sean Parker（译者：著名的第一代P2P音乐分享网站Napster的创始人）的帮助下继续Facebook的发展。同年9月，另一个社会化网络站点 ConnectU的合伙人Divya Narendra，Cameron Winklevoss和Tyler Winlevoss把Facebook告上法庭。他们称Zuckerberg非法使用了他们在让他帮助建站时开发的源代码。与此同时，Facebook获得了PayPal创始人Peter Thiel提供的约五十万美金的天使投资。到12月时，Facebook的用户数超过100万。
`

class ScrollState {

  constructor(){
    this.dx = 0 // 滚动距离x
    this.dy = 0 // 滚动距离y
    this.x = 0 // 当前位置x
    this.y = 0 // 当前位置y
    this.startX = 0 // 开始滚动x
    this.startY = 0 // 开始滚动y
    this.lastX = 0 // 上次的x
    this.lastY = 0 // 上次的y

    this.direction = 'none' // 滚动方向
  }

  next(contentOffset) {

    this.x = contentOffset.x
    this.y = contentOffset.y
    this.dx = this.x - this.startX
    this.dy = this.y - this.startY

    if( (this.y - this.lastY) > 0) {
      this.direction = 'down'
    }
    else {
      this.direction = 'up'
    }
    this.lastX = this.x
    this.lastY = this.y
  }
}


export default class Week3ScrollToTop extends Component{

  constructor(){
    super()
    this.state = {
      showUp : false,
      showStatus : true

    }
    this.scrollState = new ScrollState()
  }


  _nextState(state, scrollState) {
    const nextState = {...state}

    if(this.scrollState.y > 200) {
      nextState.showUp = true
    }
    else {
      nextState.showUp =  false
    }

    if(this.scrollState.y > 100) {
      nextState.showStatus =  false
    }
    else {
      nextState.showStatus =  true
    }

    return nextState


  }

  _scroll = (e) => {
    this.scrollState.next(e.nativeEvent.contentOffset)
    const nextState = this._nextState(this.state, this.scrollState)

    if(!deepEqual(nextState, this.state)) {
      this.setState(nextState)
    }
  }

  _up = () => {

    this.refs.scrollView.scrollTo({x : 0, y : 0, animated : true})
  }
  render(){

    const {showUp, showStatus} = this.state

    return <View style={{flex : 1}}>
      <StatusBar hidden={!showStatus} />
      <ScrollView
        style={{flex : 1, padding : 10}}
        scrollEventThrottle={16}
        ref='scrollView'
        onScroll={this._scroll}
      >
        <View style={{alignItems : 'center', justifyContent : 'center', marginTop : 20}}>
          <Text style={{fontSize : 24}}>Facebook</Text>
        </View>

        {contents.split("\n").map( (line, i) => {
            return <Text key={i} style={styles.text}>{line}</Text>
        })}

      </ScrollView>

      {showUp ?
      <TouchableWithoutFeedback onPress={this._up}>
        <View style={styles.up}>
          <Image source={require("./up.png")} style={{width : 24, height : 24}} />
        </View>
      </TouchableWithoutFeedback>
      : null}
    </View>
  }
}


const styles = StyleSheet.create({
  text : {
    fontSize : 16,
    marginBottom : 10
  },

  up : {
    position : 'absolute',
    bottom : 10,
    right : 20, width : 40, height : 40,
    backgroundColor : 'white',
    borderRadius : 20,
    borderWidth : 1,
    borderColor : '#eee',
    alignItems : 'center',
    justifyContent : 'center'
  }
})
