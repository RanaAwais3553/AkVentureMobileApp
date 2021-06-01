import AlManzal from '../../screens/alManzal/AlManzal'
import Color from '../../colors/Color'
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AlManzalStackNavigator = createStackNavigator({
  AlManzal:{
      screen:AlManzal,
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
const AlManzalStackNavigation = createAppContainer(AlManzalStackNavigator);
export default AlManzalStackNavigation
