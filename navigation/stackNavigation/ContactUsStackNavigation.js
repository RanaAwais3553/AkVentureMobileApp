import ContactUs from '../../screens/contactUs/ContactUs'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const ContactUsStackNavigator = createStackNavigator({
    Contact_Us:{
    screen:ContactUs,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.primaryColour  : Color.accentColour
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const ContactUsStackNavigation = createAppContainer(ContactUsStackNavigator);
export default ContactUsStackNavigation
