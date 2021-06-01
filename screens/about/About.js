import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../components/headerButton/HeaderButton'
import SocialMediaIcon from '../../components/socialIcon/SocialMediaIcon'
import SwiperComponent from './Swiper'

const About = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        <SwiperComponent />
      </View>
      <View style={{}}>
        <Text
          style={[{ fontSize: 24, textAlign: 'center' }, AllStyle.Aboutheading]}
        >
          About Us
        </Text>
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ScrollView style={{}}>
          <View>
            <View>
              <Text style={[{ marginRight: 8 }, AllStyle.Aboutdetail]}>
                AKVentures is a group of companies which deals in al over the
                United Arab Emirates and have following sister concern
                companies: Al Manzal, Chiltern travel & tours, NAM Global and
                Trusticon. We were honored to actively contribute to the
                completion of medium and large projects and to expand our field
                of work inside and outside Iraq to keep pace with global
                investment and trade growth and regional contracting as an
                extension of the parent company in DUBAI. In addition, we have
                more than one commercial agency from international companies
                with regard to trade in Real state , Property management,
                tourism industry and online ecommerce LMS. We are proud of all
                the work teams within the company. We consider that the human
                staff is the secret of our success and the image that is
                embedded in the minds of our clients, whether it comes to
                administrators, drivers or the rest of the workers in the
                various departments of the company, so we were keen to define
                strict standards during employment in the company, so we
                required the most substantial evidence. And long experiences,
                and we made sure to link with continuous training as a way to
                keep abreast of the developments in the profession.
              </Text>
            </View>
            <View
              style={{
                paddingTop: StatusBar.currentHeight * 1.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SocialMediaIcon
                facebookSocial="https://www.facebook.com/AK-Ventures-101283075466980"
                twitterSocial="https://twitter.com/ventures_ak"
                linkedInSocial="https://www.linkedin.com/in/ak-ventures-95b309211/"
                instagramSocial="https://www.instagram.com/akventures971/"
                websiteSocial="http://www.akventures.org/"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

About.navigationOptions = (navData) => {
  return {
    headerTitle: 'About',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default About
