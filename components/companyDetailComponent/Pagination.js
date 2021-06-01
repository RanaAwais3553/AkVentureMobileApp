import React, { useState } from 'react'
import NationalCompanies from '../../data/companiesData/national'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import AllStyles from '../../AllStyle'


const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 20;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.5;

const Pagination = ({ scrollX }) => {
  const[color , setColor] = useState([ 
    { id: '61',  color: '#9dcdfa',},
  { id: '62',  color: '#db9efa',},
  { id: '63',  color: '#999',},
  
]) 
  const inputRange = [-width, 0, width];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-DOT_SIZE, 0, DOT_SIZE],
    });
    return (
      <View style={[AllStyles.pagination]}>
        <Animated.View
          style={[
            AllStyles.paginationIndicator,
            {
              position: 'absolute',
              
              // backgroundColor: 'red',
              transform: [{ translateX }],
            },
          ]}
        />
        {color.map((item) => {
          return (
            <View key={item.id} style={AllStyles.paginationDotContainer}>
              <View
                style={[AllStyles.paginationDot, { backgroundColor: item.color }]}
              />
            </View>
          );
        })}

      </View>
    );
  };
  
  export default Pagination