import {Dimensions, Platform} from "react-native"
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'

import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import AlManzalStackNavigation from './stackNavigation/AlManzalStackNavigation'
import ChilternStackNavigation from "./stackNavigation/ChilternStackNavigation"
import Color from '../colors/Color'
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation';
import FAQStackNavigation from './stackNavigation/FAQStackNavigation';
import HomeShopsStackNavigation from './stackNavigation/HomeStackNavigation'
import { Ionicons } from '@expo/vector-icons';
import NAMGlobalStackNavigation from "./stackNavigation/NAMGlobalStackNavigation"
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation';
import TrustIconStackNavigation from './stackNavigation/TrustIconStackNavigation';
import { createAppContainer } from "react-navigation";

const MainDrawerNavigator = createDrawerNavigator({
    HomeScreen: {
      screen: HomeShopsStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color='#cea058'/>
        ),
        
        drawerLabel:'Home',
      }
    
    },

    Chiltern:{
  screen:ChilternStackNavigation,
  navigationOptions: {
    drawerIcon: () => (
      <Ionicons name = 'beer'size={25} color='#cea058'/>
    ),
   drawerLabel:'Chiltern' 
  }
},

TrustIcon:{
  screen: TrustIconStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'business'size={25} color='#cea058'/>
    ),
    drawerLabel:'Trust Icon',
  }
},


AlManzal:{
  screen: AlManzalStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'logo-buffer'size={25} color='#cea058'/>

    ),
    drawerLabel:'Al Manzal',
  }
},

NAM_Global:{
  screen: NAMGlobalStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'earth'size={25} color='#cea058'/>

    ),
    drawerLabel:'NAM Global',
  }
},


  
ContactUs:{
  screen: ContactUsStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'call-sharp'size={25} color='#cea058'/>
    ),
    drawerLabel:'ContactUs',
  }
},



    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='#cea058'/>
        ),
        drawerLabel:'AboutUs',
      }
    },

    Term_Condition:{
      screen:TermandConditionStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'reader-sharp'size={29} color='#cea058'/>
        ),
        drawerLabel:'Term&Condition',
      }
    },
  
    FAQ:{
      screen:FAQStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'hand-left-sharp'size={29} color='#cea058'/>
        ),
        drawerLabel:'FAQ',
      }
    },
  

  
  
  },{
    contentComponent: (props) => (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
          <View style={{flex:1,backgroundColor:'#343a40',borderBottomLeftRadius:70}}>
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:1,width:'100%',resizeMode:'cover'}} source={require('../assets/images/logos/logo.png')} />
          </View>
          </View>
          <DrawerItems {...props} />
        
      </SafeAreaView>
      </ScrollView>
      
    ),
    drawerBackgroundColor: Color.drawerColor,
    contentOptions:{
      activeTintColor:'#cea058',
      activeBackgroundColor : Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 30,
        
      },
      labelStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
       
      },
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'center',
      marginTop:120, 
      justifyContent: 'center',
      backgroundColor:'#343a40',
      borderBottomWidth: 2,
      borderBottomColor: '#C0C0C0',
      borderBottomEndRadius:38,
      borderBottomStartRadius:38,
     
    },
  });