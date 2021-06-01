import Chiltern from '../../screens/chiltern/Chiltern';
import Color from '../../colors/Color'
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const ChilternStackNavigator = createStackNavigator({
  Chiltern:{
      screen:Chiltern,
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
const ChilternStackNavigation = createAppContainer(ChilternStackNavigator);
export default ChilternStackNavigation
