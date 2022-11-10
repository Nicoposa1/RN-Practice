import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Colors } from '../constants/colors'

const Splash = () => {
  return (
    <View style={globalStyles.container} >
      <Text style={globalStyles.title} >Welcom</Text>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  )
}

export default Splash