import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image
        blurRadius={70}
        source={require("../assets/image/house.png")}
        style={styles.background}
      />
      {/* Other content goes here */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
