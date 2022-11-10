import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'
import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText} >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Button