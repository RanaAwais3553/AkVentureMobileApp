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

        const Circle = ({ scrollX }) => {
            return (
              <View style={[StyleSheet.absoluteFillObject, AllStyles.circleContainer]}>
                {data.map(({ color }, index) => {
                  const inputRange = [
                    (index - 0.55) * width,
                    index * width,
                    (index + 0.55) * width,
                  ];
                  const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp',
                  });
                  const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0.2, 0],
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={[
                        AllStyles.circle,
                        {
                          backgroundColor: color,
                          opacity,
                          transform: [{ scale }],
                        },
                      ]}
                    />
                  );
                })}
              </View>
            );
          };
          


export default Circle
