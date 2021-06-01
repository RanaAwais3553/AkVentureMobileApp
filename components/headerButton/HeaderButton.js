import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../colors/Color';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Platform.OS === 'android' ? 'white' : Color.primaryColour}
    />
  );
};

export default CustomHeaderButton;
