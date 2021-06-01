import Color from '../../colors/Color'
import EcommerceBusiness from '../../screens/chiltern/Chiltern'
import NamGlobal from '../../screens/namGlobal/NamGlobal';
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const NAMGlobalStackStackNavigator = createStackNavigator({
    NAM_Global:{
      screen:NamGlobal,
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
const NAMGlobalStackNavigation = createAppContainer(NAMGlobalStackStackNavigator);
export default NAMGlobalStackNavigation
