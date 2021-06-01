import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react'
import ServicesGrid from '../../components/homeScreen/ServicesGrid'
import { View } from 'react-native'

const AlManzal = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ServicesGrid
        title="AL MANZAL REAL ESTATE"
        servicesImages={require('../../assets/images/Banners/al-manzal-web-banner.jpg')}
        serviceLogo={require('../../assets/images/mainServicesImgs/alManzal.png')}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'HomeScreen_Detail',
            params: {
              shopId: '1',
              shopTitle: 'AL MANZAL REAL ESTATE',
            },
          })
        }}
      />
    </View>
  )
}

AlManzal.navigationOptions = (navData) => {
  return {
    headerTitle: 'AL MANZAL REAL ESTATE',
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

export default AlManzal
