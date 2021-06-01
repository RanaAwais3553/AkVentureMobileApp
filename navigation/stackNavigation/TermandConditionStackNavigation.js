import TermandCondition from '../../screens/termandCondition/TermandCondition'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const TermandConditionStackNavigator = createStackNavigator({
    Termand_Condition:{
    screen:TermandCondition,
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
const TermandConditionStackNavigation = createAppContainer(TermandConditionStackNavigator);
export default TermandConditionStackNavigation
