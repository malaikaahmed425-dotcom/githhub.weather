import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PredictScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Weather App!</Text>
    </View>

  )
}

export default PredictScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#00aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
})

