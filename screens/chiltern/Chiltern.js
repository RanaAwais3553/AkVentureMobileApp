import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react';
import ServicesGrid from '../../components/homeScreen/ServicesGrid'
import { View } from 'react-native';

const Chiltern = props =>{

    return(
      <View style={{flex:1 }}>
        
       
          
        <ServicesGrid  
      title='CHILTERN TRAVEL AND TOURS'
      servicesImages = {require('../../assets/images/Banners/chiltern-web-banner.jpg')}
      serviceLogo = {require('../../assets/images/mainServicesImgs/chiltern.png')}
         onSelect={()=>{
         props.navigation.navigate({routeName: 'HomeScreen_Detail',
         params:{
           shopId :'1',
           shopTitle :'CHILTERN TRAVEL AND TOURS'
         }
      });
      }}
      />
        
</View>
    );
  };
  

  Chiltern.navigationOptions = navData => {
  
  return{

  headerTitle:'CHILTERN TRAVEL AND TOURS',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default Chiltern;

