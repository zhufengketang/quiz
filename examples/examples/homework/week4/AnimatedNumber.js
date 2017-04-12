import React, {Component} from 'react'

import {Animated, Text, View, StyleSheet, Easing} from 'react-native'

export class AnimatedNumber extends Component{

  static defaultProps = {
    h : 60,
    gap : 500
  }
  constructor(props){
    super()
    this.state = {
      number : (props.number).match(/[\d\.]/g)
    }
  }

  render(){



    return <View style={{flexDirection : "row"}} key={this.props.refreshKey}>
      {this.state.number.map((n, i) => {
        if(n === '.') {
          return <View key={i} style={[styles.number, {paddingBottom : 3}]}><Text style={this.props.fontStyle}>.</Text></View>
        } else {
          return <ANumber fontStyle={this.props.fontStyle}
            h={this.props.h} key={i}
            to={n} duration={this.props.duration}
            gap={i * this.props.gap} />
        }
      })}
    </View>

  }
}


class ANumber extends Component{
  static defaultProps = {
    to : 0,
    dealy : 0
  }
  constructor(){
    super()
    this.state = {
      value : new Animated.Value(0)
    }
  }

  componentDidMount(){

    setTimeout( () => {

      Animated.timing(this.state.value, {
        easing : Easing.easing,
        toValue: 1,
        duration : this.props.gap + this.props.duration,
      }).start()
    }, 400)
  }

  render(){
    const v = this.state.value.interpolate({
      inputRange : [0, 1],
      outputRange : [10, this.props.to == 0 ? 0 :  -(10-this.props.to) * this.props.h]
    })

    const r = [0,9,8,7,6,5,4,3,2,1]

    return <View  style={[styles.container, {height : this.props.h}]}>
      <Animated.View style={{marginTop : v}}>
      {r.map(x => {
        return <View key={x} style={[styles.number, {height : this.props.h}]}>
          <Text style={this.props.fontStyle}>{x}</Text>
        </View>
      })}
      </Animated.View>
    </View>

  }
}

const styles = StyleSheet.create({
  container : {
    overflow : 'hidden',
    backgroundColor : 'rgba(0, 0, 0, 0)'

  },
  number : {
    flexDirection : 'row',
    alignItems : 'center'
  }
})
