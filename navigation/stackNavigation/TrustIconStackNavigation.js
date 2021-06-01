import Color from '../../colors/Color'
import {Platform} from "react-native"
import TrustIcon from '../../screens/trustIcon/TrustIcon';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const TrustIconStackNavigator = createStackNavigator({
  TrustIcon:{
      screen:TrustIcon,
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
const TrustIconStackNavigation = createAppContainer(TrustIconStackNavigator);
export default TrustIconStackNavigation
