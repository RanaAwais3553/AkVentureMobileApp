import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react';
import ServicesGrid from '../../components/homeScreen/ServicesGrid'
import { View } from 'react-native';

const TrustIcon = props =>{
   
    return(
      <View style={{flex:1 }}>
        
        <ServicesGrid  
      title='TRUSTICON REAL ESTATE'
      servicesImages = {require('../../assets/images/Banners/trust-icon-web-banner.jpg')}
      serviceLogo = {require('../../assets/images/mainServicesImgs/trustIcon.png')}
         onSelect={()=>{
         props.navigation.navigate({routeName: 'HomeScreen_Detail',
         params:{
           shopId :'1',
           shopTitle :'TRUSTICON REAL ESTATE'
         }
      });
      }}
      />        
</View>
    );
  };
  
  TrustIcon.navigationOptions = navData => {
  
  return{

  headerTitle:'TRUSTICON REAL ESTATE',
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

export default TrustIcon;


