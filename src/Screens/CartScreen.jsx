import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CartScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Text>CartScreen</Text>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})