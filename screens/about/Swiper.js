import React, { Component } from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
import AllStyle from '../../AllStyle'
  
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper autoplay = {true}  horizontal={false}  
      
      showsPagination={false}
      showsButtons={false}>
        <View style={AllStyle.slide1}>
          <Image style={AllStyle.imagess} source={require('../../assets/aboutUs.jpg')}/>
        </View>
        <View style={AllStyle.slide2}>
        <Image style={AllStyle.imagess} source={require('../../assets/joinus.jpg')}/>

          
        </View>
        <View style={AllStyle.slide3}>
        <Image style={AllStyle.imagess} source={require('../../assets/growus.png')}/>

        </View>
      </Swiper>
    )
  }
}
 