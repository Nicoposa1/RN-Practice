import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from '../constants/colors'
import React from 'react'

const Input = ({label, value, onChangeText, secureTextInput}) => {
  return (
    <View style={styles.container} >
      <TextInput 
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextInput}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.ligth,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  input: {
    width: '100%',
    height: '100%',
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold'
  }
})