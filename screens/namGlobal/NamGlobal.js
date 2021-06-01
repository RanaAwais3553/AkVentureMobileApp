import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react';
import ServicesGrid from '../../components/homeScreen/ServicesGrid'
import { View } from 'react-native';

const NamGlobal = props =>{
   
    return(
      <View style={{flex:1 }}>
        
      <ServicesGrid  
      title='NAM Global'
      servicesImages = {require('../../assets/images/Banners/NAMGlobal.jpeg')}
      serviceLogo = {require('../../assets/images/mainServicesImgs/shop.jpg')}
         onSelect={()=>{
         props.navigation.navigate({routeName: 'HomeScreen_Detail',
         params:{
           shopId :'1',
           shopTitle :'NAM Global'
         }
      });
      }}
      />
        
</View>
    );
  };
  
NamGlobal.navigationOptions = navData => {
  
  return{

  headerTitle:'NamGlobal',
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

export default NamGlobal;


