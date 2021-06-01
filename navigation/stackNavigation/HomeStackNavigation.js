import Color from '../../colors/Color'
import Home from '../../screens/Home';
import HomeScreenDetail from '../../screens/HomeScreenDetail';
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeStackNavigation = createStackNavigator({
  
    Home_Screen: {
    
      screen: Home,
},
HomeScreen_Detail:{
    screen :HomeScreenDetail,
  },

},
{
  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.primaryColour : Color.accentColour
        
},
    headerTitleStyle:{
      fontFamily: "open-sans-bold",
        fontWeight: "200"
    },
      headerTintColor: 'white'
  }
});

const HomeShopsStackNavigation = createAppContainer(HomeStackNavigation)

export default HomeShopsStackNavigation
