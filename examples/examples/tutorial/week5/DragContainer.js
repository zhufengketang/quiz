import React, {Component} from 'react'

import {View, PanResponder, Animated} from 'react-native'



/**
 * gestureState 对象
 * - stateID gestureState唯一ID
 * - moveX 最近一次位置x
 * - moveY 最近一次位置y
 * - x0 开始位置x
 * - y0 开始位置y
 * - dx 移动距离x
 * - dy 移动距离y
 * - vx 加速度x
 * - vy 加速度y
 * - numberActiveTouches 触点数量
 */

export default class DragContainer extends Component{

  static lock = null

  static defaultProps = {
    left : 0,
    top : 0
  }

  constructor(props){
    super()

    this.state = {
      top : new Animated.Value(props.top),
      left : new Animated.Value(props.left)
    }
  }
  componentWillMount(){

    this._panResponder = PanResponder.create({
      // 确认响应开始事件（冒泡)
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('onStartShouldSetPanResponder', this.props.name)

        // 如果已经有其他组件获得了锁
        // 就停止处理
        if(DragContainer.lock){
          return false
        }
        DragContainer.lock = gestureState.stateID //分配锁，记录哪个组件获得了锁
        return true
      },

      // 确认响应开始事件（捕获）
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,

      // 确认响应移动事件（冒泡）
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log('onMoveShouldSetPanResponder', this.props.name)


        // 如果已经有其他组件获得了锁
        // 就停止处理
        if(DragContainer.lock){
          return false
        }
        DragContainer.lock = gestureState.stateID //分配锁，记录哪个组件获得了锁
        return true
      },

      // 确认响应移动事件（捕获）
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      // 处理手势开始
      // gestureState.d{x,y} 会被设置成0
      onPanResponderGrant: (evt, gestureState) => {



        console.log('onPanResponderGrant', this.props.name)
        this.startLeft = this.state.left._value
        this.startTop = this.state.top._value
      },
      // 处理手势移动
      // 积累的移动距离，会被记录在gestureState.d{x,y}中
      onPanResponderMove: (evt, gestureState) => {
        this.state.left.setValue( gestureState.dx + this.startLeft)
        this.state.top.setValue( gestureState.dy + this.startTop)
      },

      // 当其他组件请求手势结束
      onPanResponderTerminationRequest: (evt, gestureState) => {
        console.log("onPanResponderTerminationRequest", this.name)
        return true
      },

      // 手势结束
      // 用户释放了所有触摸点
      onPanResponderRelease: (evt, gestureState) => {
        if(DragContainer.lock === gestureState.stateID){
          DragContainer.lock = null
        }
      },

      // 手势结束
      // 其他PanResponder抢占了响应,当前手势处理需要取消
      onPanResponderTerminate: (evt, gestureState) => {
        if(DragContainer.lock === gestureState.stateID){
          DragContainer.lock = null
        }
      },

      // Android Only
      // 是否阻止原生组件成为responder
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    })
  }
  render(){

    return <Animated.View
      {...this._panResponder.panHandlers}
      style={[this.props.style, {
        position:'absolute',
        top : this.state.top,
        left : this.state.left
     }]}
    >
      {this.props.children}
    </Animated.View>
  }
}
