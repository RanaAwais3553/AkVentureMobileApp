import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
  SafeAreaView, 
  ScrollView,
} from 'react-native';
import AllStyles from '../../AllStyle'
import {Icon} from 'react-native-elements'

const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 20;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.5;

const Item = ({ imageUri,iconName,iconLocation, heading, index, phnNum,address, description, scrollX }) => {


    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const inputRangeOpacity = [
      (index - 0.3) * width,
      index * width,
      (index + 0.3) * width,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });
    const translateXHeading = scrollX.interpolate({
      inputRange,
      outputRange: [width * 0.1, 0, -width * 0.1],
    });
    const translateXDescription = scrollX.interpolate({
      inputRange,
      outputRange: [width * 0.7, 0, -width * 0.7],
    });
    const opacity = scrollX.interpolate({
      inputRange: inputRangeOpacity,
      outputRange: [0, 1, 0],
    });
  
    return (
      <View style={AllStyles.itemStyle}>
        <View style={AllStyles.imageContainer}>
        <Animated.Image
          source={imageUri}
          style={[
            AllStyles.imageStyle,
            {
              transform: [{ scale }],
            },
          ]}
        >
          </Animated.Image>

           <View style={AllStyles.backImageOverlayText}>
            {/* <Text style={AllStyles.backImageOverlayTextStyle}> {heading} </Text> */}
            <Text style={AllStyles.backImageOverlayTextStyle}>
            <Icon
    name= {iconName} 
    type= 'font-awesome' 
    color='#10d300'
    size={14}
    
    /> {phnNum} </Text>
            <Text style={AllStyles.backImageOverlayTextStyle}> 
            <Icon
    name= {iconLocation} 
    type= 'ionicon' 
    color='#10d300'
    size={14}
    
    />{address}</Text>


          </View>
         
          
        </View>
        <View style={AllStyles.textContainer}>
          <Animated.Text
            style={[
                AllStyles.heading,
              {
                opacity,
                transform: [{ translateX: translateXHeading }],
              },
            ]}
          >
            {heading}
          </Animated.Text>
          <SafeAreaView>
            <ScrollView>
          <Animated.Text
            style={[
                AllStyles.description,
              {
                opacity,
                transform: [
                  {
                    translateX: translateXDescription,
                  },
                ],
              },
            ]}
          >
            {description}
          </Animated.Text>
          </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    );
  };
  
  export default Item