import { Avatar, Button, Card, Icon } from 'react-native-elements'
import {
Dimensions,
Platform,
TouchableNativeFeedback,
TouchableOpacity,
View,
} from 'react-native'

import React from 'react'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

const ServicesGrid = (props) => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
  return(
    
  <View style={{flex:1}}>
    
    <TouchableCom style={{flex:1}}
       onPress={props.onSelect}
      
      >
<Card>
    
    <Card.Image style={{height:screenHeight/3, width:screenHeight/2, resizeMode:'stretch'}} source={props.servicesImages}>
  
    </Card.Image>
    <Card.Divider />
    <Card.Divider />

    <View style={{flex:1, flexWrap:'wrap', flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginBottom:25}}>
    <Avatar
  size={52}
  rounded
  source={props.serviceLogo}
  
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
>

  </Avatar>
    <Card.Title style={{fontFamily: 'open-sans-bold',color:'#808080'}}>{props.title}</Card.Title>
    </View>
    {/* <Card.Divider/> */}

      <Button
       onPress={props.onSelect}
        buttonStyle={{borderRadius: 0, marginTop:25, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#0f385a'}}
        title='MORE INFO' />
  </Card>

      </TouchableCom>
      </View>
      
  );
};
export default ServicesGrid