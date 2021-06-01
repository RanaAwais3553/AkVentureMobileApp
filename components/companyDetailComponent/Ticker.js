import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import data from '../../data/data';
import AllStyles from '../../AllStyle'


const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 20;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.5;

const Ticker = ({ scrollX }) => {
    const inputRange = [-width, 0, width];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
    });
    return (
      <View style={AllStyles.tickerContainer}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          {data.map(({ type }, index) => {
            return (
              <Text key={index} style={AllStyles.tickerText}>
                {type}
              </Text>
            );
          })}
        </Animated.View>
      </View>
    );
  };
  export default Ticker