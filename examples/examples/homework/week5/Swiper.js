import React, {Component} from 'react'

import {View, Animated, PanResponder} from 'react-native'

export default class Swiper extends Component{


  static defaultProps = {
    duration : 300,
    interval : 2000 // 自动播放时间间隔
  }

  static propTypes = {
    style : React.PropTypes.object,
    duration : React.PropTypes.number
  }

  constructor(props){
    super()

    // 轮播图数量
    this.N = props.children.length ? props.children.length : 1

    // 是否被触摸
    this.touching = false

    // 是否在播放动画
    this.animating = false

    this.state = {
      a : new Animated.Value(0) // a belongs [0, N]
    }
  }





  componentWillMount(){

    this._panResponder = PanResponder.create({
      onPanResponderGrant : (evt, gestureState) => {

        this.touching = true
        this.animating = false
        // 在用户触屏的时候停止播放动画
        this.state.a.stopAnimation()
      },
      onPanResponderMove : (evt, gestureState) => {

        // 轮播图随着手势移动
        const {x0, dx} = gestureState // 开始的位置和移动的距离
        this.state.a.setValue(x0 + dx / (this.screenWidth) ) // 设置当前位置

      },
      onPanResponderRelease : (evt, gestureState) => {
        this.touching = false
        // 还原
        this.restore()
      },
      onPanResponderTerminate : (evt, gestureState) => {
        this.touching = false
        // 还原
        this.restore()
      }

    })
  }

  componentDidMount(){
  }

  _layout = (evt) => {
    // 计算一屏的宽度
    this.screenWidth = evt.nativeEvent.layout.width
  }


  /**
   * 循环播放
   */
  loop = () => {

    this.I = setInterval( () => {

    })
  }

  /**
   * 将幻灯片还原到对齐的位置
   */
  restore = () => {
    const toValue = Math.round(this.state.a._value) // 四舍5入

    // 滚动时间和距离成正比
    // 速度不变
    const duration = Math.abs(toValue - this.state.a._value) * this.props.duration


    this.play(toValue, duration)
  }

  /**
   * 播放动画
   * @param x 播放到的位置
   * @param druation 播放时间
   */
  play = (x, duration) => {
    if(! (this.touching || this.animating) ) {
      this.animating = true
      this.state.a.timming({
        duration : duration || this.props.duration,
        toValue : x
      }).start( () => {
        this.animating = false
      })
    }
  }



  render() {
    const {style} = this.props

    return <View
      onLayout={this._layout}
      style={[style, {flexDirection : 'row', flexWrap : 'no-wrap'}]}>
      {this.props.children}
    </View>
  }
}
