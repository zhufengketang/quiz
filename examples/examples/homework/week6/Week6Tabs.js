import React, {Component} from 'react'

import {View, Image, Animated, 
  StyleSheet,
  Text, 
  Button,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'


/*
 *  将Tab的配置集中在这里
 */
const tabs = [
  {
    text : "发现",
    image : require("./1.png"),
    activeImage : require("./1-active.png"),
  },
  {

    text : "消息",
    image : require("./2.png"),
    activeImage : require("./2-active.png"),
  },
  {

    text : "学习",
    image : require("./3.png"),
    activeImage : require("./3-active.png"),
  },
  {
    text : "我",
    image : require("./4.png"),
    activeImage : require("./4-active.png"),

  }
]

/**
 * 页面
 */
export default class Week6Tabs extends Component{


  constructor(props){
    super(props)

    this.state = {
      activeId : 0,
      v1 : new Animated.Value(0),
      v2 : new Animated.Value(0)
    }
  }

  _back = () => {
    
  }

  _play = () => {

    if(this.start){return}
    if(!this.start) {
      this.start = true
    }

    if (this.state.v1._value == 0) {
      Animated.parallel([
        Animated.timing(
          this.state.v1, {
            toValue: 1,
            duration: 300
          }
        ),
        Animated.timing(
          this.state.v2, {
            toValue: 1,
            duration: 300
          }
        )
      ]).start(() => {
        this.start = false
      })
    } else {
      Animated.parallel([
        Animated.timing(
          this.state.v2, {
            toValue: 0,
            duration: 300
          }
        ),
        Animated.timing(
          this.state.v1, {
            toValue: 0,
            duration: 300
          }
        )
      ]).start(() => {
        this.start = false
      })

    }
    
  }

  _change = (id) => {
    this.setState({activeId : id})
  }

  render(){


    return <View style={{ flex: 1 }}>
      {/* 内容部分，跟随Tab切换 */}
      
      <TabContent activeId={this.state.activeId}>
        <View id={0} style={{alignItems : 'center', justifyContent : 'center'}}>
          <Text>发现</Text>
        </View>

        <View id={1} style={{alignItems : 'center', justifyContent : 'center'}}>
          <Text>消息</Text>
        </View>

        <View id={2} style={{alignItems : 'center', justifyContent : 'center'}}>
          <Text>学习</Text>
        </View>

        <View id={3} style={{alignItems : 'center', justifyContent : 'center'}}>
          <Text>我</Text>
        </View>
      </TabContent>

      {/* Action Sheet */}

      <Animated.View style={{
        position : 'absolute',
        zIndex : 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get('window').height,
        top: this.state.v2.interpolate({
          inputRange: [0, 1],
          outputRange: [Dimensions.get("window").height, 0]
        }),
        backgroundColor : 'yellow'
      }} >
      </Animated.View>
      {/* 圆形按钮 */}
      <Animated.View style={{
        zIndex: 1,
        position: 'absolute',
        width: 48,
        bottom: 24,
        left:  Dimensions.get('window').width/2 - 24,
        height: 48,
        borderRadius: 24,
        borderColor : '#888',
        borderWidth : 1,
        backgroundColor: this.state.v1.interpolate({
          inputRange : [0, 1] ,
          outputRange : ['#fff', '#000']
        }),
        transform : [{rotate : this.state.v1.interpolate({
          inputRange : [0, 1] ,
          outputRange : ['0deg', '360deg']
        })}]
        
      }}>

        <TouchableWithoutFeedback onPress={this._play}>
          <View style={{alignItems: 'center', justifyContent : 'center'}}>
            <Text style={{fontFamily : 'sans-serif', fontSize : 36, fontWeight : 'bold', color : '#666',marginTop : -2}}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>



      {/* Tab部分 */}
      <Tabbar 
        gapWidth={60}
        tabs={tabs} 
        initialActiveId={this.state.activeId}
        color="#888"
        activeColor="#1afa29"
        onTabChange={this._change}
      />
    </View>
  }

}

/**
 * Tabbar对应的内容部分
 */
class TabContent extends Component{


  constructor(){
    super()
    this.state = {
      unitWidth : 0 
    }
  }

  
  _layout = (evt) => {

    this.setState({
      unitWidth : evt.nativeEvent.layout.width,
      unitHeight : evt.nativeEvent.layout.height 
    })

  }
  render(){


    return <View onLayout={this._layout} style={{flex : 1}}>
      <View style={{flexDirection : 'row'}}>

        {this.state.unitWidth ? React.Children.map(this.props.children, (child, i) => {


          return React.cloneElement(child, {
            key: i,
            style: {
              ...child.props.style, 
              width : child.props.id=== this.props.activeId ? this.state.unitWidth : 0,
              height : this.state.unitHeight
            }
          })

      }) : null}

      </View>

    </View>
  }
}


/**
 * Tabbar
 */
class Tabbar extends Component{

  constructor(props){
    super(props)
    this.state = {
      activeId : props.initialActiveId || 0 
    }
  }

  _change = (i) => {
    return () => {
      if(! (this.state.activeId === i)) {
        this.setState({activeId : i}, () => {
          this.props.onTabChange && this.props.onTabChange(i)
        })
        
      }
    }
  }

  render(){

    const nTabs = [...tabs.slice(0, tabs.length / 2), null, ...tabs.slice(tabs.length  / 2, tabs.length )]


    return <View style={styles.tabbar}>
      {nTabs.map( (tab, i) => {
        if(tab === null) {
          return <View key={i} style={{width : this.props.gapWidth, height : 48}}>
          </View>
        }
        return <TabbarIcon 
          key={i}
          id={i}
          activeId={this.state.activeId}
          text={tab.text}
          image={tab.image}
          activeImage={tab.activeImage}
          color={this.props.color}
          activeColor={this.props.activeColor}
          onChange={this._change(i)}
        />
      })}
    </View>

  }
}

/**
 * 小图标
 */
class TabbarIcon extends Component{

  _press = () => {

    this.props.onChange && this.props.onChange()

  }
  render(){

    const {
      id, 
      activeId, 
      text, 
      image, 
      activeImage,
      color,
      activeColor,
    } = this.props

    return <TouchableWithoutFeedback onPress={this._press}>
      <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>


        <Image 
          style={[styles.tabbarIconImage, {height : activeId === id ? 24 : 0}]}
          source={activeImage} />


        <Image 
          style={[styles.tabbarIconImage, {height : activeId === id ? 0 : 24}]}
          source={image} />


        <Text style={[styles.tabbarIconText, {color : activeId === id ? activeColor : color}]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  }
}



const styles = StyleSheet.create({
  tabbarIconText : {
    fontSize : 11,
    color : '#888'
  },
  tabbarIconImage : {
    width : 24,
    height : 24
  },
  tabbar : {
    borderTopWidth : StyleSheet.hairlineWidth,
    borderTopColor : "#888",
    height : 48,
    flexDirection : 'row' 
  }

})