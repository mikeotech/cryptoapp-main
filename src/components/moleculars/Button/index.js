import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import { fonts } from '../../../utils/fonts'

const Button = ({ text, backColor }) => {
  return (
    <TouchableOpacity style={styles.container(backColor)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: backColor => ({
    backgroundColor: backColor,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }),
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primary[800]
  }
})