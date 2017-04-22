import React, {Component} from 'react'

import {View, Animated, PanResponder} from 'react-native'

export default class Swiper extends Component{


  static defaultProps = {
    duration : 300,
    interval : 2000, // 自动播放时间间隔
    height : 200,
    backgroundColor : 'white'
  }

  static propTypes = {
    style : React.PropTypes.object,
    duration : React.PropTypes.number,
    height : React.PropTypes.number,
    backgroundColor : React.PropTypes.string
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
      inited : false, // 在layout执行完成后设置
      a : new Animated.Value(0) // a belongs [0, N - 1]
    }
  }





  componentWillMount(){


    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log("lll")
        return true
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant : (evt, gestureState) => {

        this.touching = true
        this.animating = false

        // 在用户触屏的时候停止播放动画
        this.state.a.stopAnimation()
        this._value = this.state.a._value // 记住当前位置
      },
      onPanResponderMove : (evt, gestureState) => {

        // 轮播图随着手势移动
        const {dx, vx} = gestureState // 移动的距离和速度


        let nextValue  = this._value + -dx / (this.screenWidth) // 设置下一个位置

        if(nextValue < 0) {
          nextValue = 0
        } else if(nextValue > this.N - 1) {
          nextValue = this.N - 1
        }

        this.state.a.setValue( nextValue )

      },
      onPanResponderRelease : (evt, gestureState) => {
        this.touching = false

        this.vx = gestureState.vx //释放时候的速度 , 增加一个助力
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


  _layout = (evt) => {
    // 计算一屏的宽度
    this.screenWidth = evt.nativeEvent.layout.width

    console.log('screenWidth:' + this.screenWidth)
    this.setState({
      inited : true
    })
  }


  /**
   * 将幻灯片还原到对齐的位置
   */
  restore = () => {

    // 根据释放时速度，播放一个动画 (增加一个助力)
    if( Math.abs(this.vx) < 0.3 ){
      this.vx = this.vx > 0 ? 0.3  : -0.3
    } else if(Math.abs(this.vx) > 0.8) {
      this.vx = this.vx > 0 ? 0.8 : -0.8
    }

    let steerValue =  Math.floor( - this.vx + this.state.a._value)

    console.log(steerValue)
    // 不允许超出范围
    if(steerValue < 0) {
      steerValue = 0
    } else if(steerValue > this.N - 1) {
      steerValue = this.N - 1
    }

    // 滚动时间和距离成正比
    // 速度不变

    const duration = Math.abs(steerValue - this.state.a._value) * this.props.duration




    this.play(steerValue, duration)




  }

  /**
   * 播放动画
   * @param x 播放到的位置
   * @param druation 播放时间
   */
  play = (x, duration) => {
    if(! (this.touching || this.animating) ) {
      this.animating = true
      Animated.timing(this.state.a, {
        duration : duration || this.props.duration,
        toValue : x
      }).start( () => {
        this.animating = false
      })
    }
  }



  render() {
    const {style, height} = this.props

    return <View
      onLayout={this._layout}
      {...this._panResponder.panHandlers}
      style={[style, {flexDirection : 'row',
        backgroundColor : this.props.backgroundColor,
         height : this.props.height}]}>
        {this.state.inited ?
          <Animated.View
            style={{flexWrap : 'nowrap', flexDirection : 'row', transform : [{translateX : this.state.a.interpolate({
            inputRange : [0, this.N - 1],
            outputRange : [0, -(this.N - 1) * this.screenWidth]

          })}]  }}>
            { React.Children.map(this.props.children, (child, i) => {
              return React.cloneElement(child, {key : i, style : {width : this.screenWidth, height : this.props.height} })
            })}
          </Animated.View>
        :null}
    </View>
  }
}
