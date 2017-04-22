
import React, {Component} from 'react'
import {View, Dimensions,TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Text} from 'react-native'


import {format_currency} from 'util'


export default class CourseCardBig extends Component{

  render() {
    const W = Dimensions.get("window").width
    const {image, title, author, description, price} = this.props
    return <TouchableWithoutFeedback elevation={true}  onPress={this.props.onPress}>
      <View  style={courseStyle.cardContainer}>
        <Image
          source={{uri : image}}
          style={{width : W - 22, height : (W - 20) * 0.3}}
        />
        <Title>{title}</Title>
        <Author label="讲师">{author}</Author>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </View>
    </TouchableWithoutFeedback>
  }

}

const Title = ({children}) => {
  return <Text style={{...Paragraph, color : COLOR_TITLE, fontSize : 18, fontWeight : 'bold'}}>{children}</Text>

}

const Author = ({label, children}) => {
  return <Text style={{...Paragraph, color : COLOR_TEXT_LIGHT}}>{label}:{children}</Text>
}


const Description = ({children}) => {
  return <Text style={{...Paragraph, color : COLOR_TEXT_LIGHT}}>{children}</Text>
}

// 1000 => 1,000.00
// 1000.000 => 1,000.00



const Price = ({children}) => {
  return <Text style={{...Paragraph, color : COLOR_PRICE,fontSize : 18, fontWeight : 'bold'}}>￥{format_currency(children)}</Text>
}

const Paragraph = {
  paddingLeft : 20,
  paddingRight : 20,
  marginTop : 10

}


const courseStyle = StyleSheet.create({
    cardContainer: {
      shadowColor : "grey",
      shadowOpacity : 0.5,
      shadowRadius : 3,
      shadowOffset : {width : 0, height : 5},
      backgroundColor: "white",
      marginBottom: 0,
      paddingBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop : 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#c7c8c9",
    }
  }
)
