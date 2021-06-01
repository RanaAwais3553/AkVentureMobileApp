import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Image, SafeAreaView, Text, View } from 'react-native';

import AllStyle from "../../AllStyle";
import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler'

//import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'


const FAQ = props =>{
  return(
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    
  <View style={AllStyle.aboutMainClass}>
    {/* <View style={{flex:1}}>
    <Image source={require('../../assets/images/excursions/dubai-burj-khalifa-tour-600x433.jpg')}  style={AllStyle.aboutimage}/>
    </View> */}
    {/* <View style={{flex:1}}>
      <SocialMediaIcon/>
    </View> */}
    <View style={{}}>
      <Text style={[{fontSize:18,textAlign:'center'},AllStyle.Aboutheading]}>Frequently asked Questions Missing</Text>
    </View>


{/*     
    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>1.What Business services does the company have? 
      </Text>
    </View>
    
   
     
    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>Through our group's difficult work and the exertion of our regarded providers, LBGLOBE gathering of organizations gives a flexible scope of administrations, including land administrations, promoting and ad, development, exchange, import/fare, delivery, and coordination, assessment administrations, and schooling. Furthermore, LBGLOBE likewise offers types of assistance to worldwide customers.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>2- What career opportunities does LBGLOBE have? </Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutdetail}>
      LBGLOBE  gives a few alluring professional openings. Since we are a multi-dimensional organization, our work market goes from the land, exchange, and promoting specialists to scholastics and coordination specialists. As a family, we esteem our workers. In this way, we urge skilled people to go after positions at Paradise Group. 
        
        </Text>
    </View>
    
    
   

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>3- What is the organization's work interaction? 
      </Text>
    </View>


    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>To begin with, we get the venture subtleties and outline from our customers next. We investigate and assess every one of the practical answers to complete the errand. At that point, our specialists and representatives are doled out to perform various positions. Finally, we assess our work totally and hand it over to the customer.
      </Text>
    
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>4-How would I be able to contact the lbglobe?</Text>
    </View>
    
    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>You can, without much of a stretch, reach us at info@lbglobe.org. You can likewise visit our site at https://www.lbglobe.org/or. Get in touch with us on the accompanying number: +447391758721. We additionally have a day in and day out help administration on WhatsApp and Facebook Messenger. Also, you can stay aware of our most recent tasks through Twitter, Facebook,  Instagram, and LinkedIn. 
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>5-How would I be able to turn into a provider for LBGLOBE? </Text>
    </View>



    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>LB GLOBE invites any individual who has similar item quality principles as us to be our provider. We exchange merchandise going from clinical gear, careful devices, material items, and food things. On the off chance that you are a provider, head to our site can fill the structure given under the "provider" tab. 
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>6-What projects has the lbglobe completed? </Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>LBGLOBE has finished a few land projects, including Paradise Estate, CPEC Investments, New Age Developers, and Bin Qassim City. Our other projects incorporate Eximfast, Media Industries, Majestic Trading, and Zaroon trading. We additionally dispatched ARFA Educational Network in Pakistan. Pegasus  delivery and coordination. 
It is our delivery project. </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>7-Does the lbglobe have worldwide accomplices? </Text>
    </View>


    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>Indeed, undoubtedly. LBGLOBE has numerous global accomplices. The most significant of them are Fenghuang Elevators and Long hui Ventures from China. Fenghuang lifts a global organization giving lift establishment and upkeep administrations while Long Hui adventures give fix, modernization for lifts, elevators and stopping lifts, and so on
      </Text>
    </View>


    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>8-Does the organization have any delivery administration?</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>Indeed, LBGLOBE has dispatched its transportation administration under the name Pegasus Shipping and Logistics. The organization gives delivery to and from the customers for different things, including material products, careful and clinical hardware, synthetic compounds. All of the items are sent with care and security, and no trade-offs are made about wellbeing.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>9-Where would I be able to visit the lbglobe?</Text>
    </View>

    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>LBGLOBE has its head office situated in Lahore at Office No 16, First Floor, Naqi Arcade, The Mall. Lbglobe esteems its customers, and our group will happily give you any assistance or help with respect to our administrations. You can likewise get in touch with us through our email accessible on our site. 
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14},AllStyle.Aboutheading]}>10-What are assessment administrations? </Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>LBGLOBE gives assessment administrations to various customers. Assessment administrations target improving straightforwardness and trustworthiness across multiple business areas. Our organization Accurate Plus helps customers, including Muslim Commercial Bank, Habib Bank Ltd., and Faysal Bank. We utilize our administrations to expand administration quality and value.
      </Text>
    </View> */}

    
  </View>
  
  </SafeAreaView>
  </ScrollView>
);
};

FAQ.navigationOptions = navData => {
  
  return{

  headerTitle:'FAQ',
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

export default FAQ;