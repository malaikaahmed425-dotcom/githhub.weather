import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      
        <Image
          source={require('../assets/image/cloud.png')}
          style={styles.img}
          resizeMode='contain'
        />

      
        <Text style={styles.temperature}>19°</Text>
        <Text style={styles.precipitations}>Precipitations</Text>
        <Text style={styles.tempRange}>Max: 24°  Min: 18°</Text>

    
        <Image
          source={require('../assets/image/Housee.png')}
          style={styles.house}
        />


        <View style={styles.forecastContainer}>
  <View style={styles.forecastHeader}>
    <Text style={styles.forecastDate}>Today</Text>
    <Text style={styles.forecastDate}>July, 21</Text>
    
  </View>
     
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: 'row' }}>
      {[
        { time: '15.00', temp: '19°C' },
        { time: '16.00', temp: '18°C' },
        { time: '17.00', temp: '18°C' },
        { time: '18.00', temp: '18°C' },
      ].map((item, index) => (
        <View key={index} style={styles.hourBlock}>
          <Text style={styles.hourTemp}>{item.temp}</Text>
          <Image
            source={require('../assets/image/rainicon.png')}
            style={styles.hourIcon}
          />
          <Text style={styles.hourTime}>{item.time}</Text>
        </View>
      ))}
    </View>
  </ScrollView>
</View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
     backgroundColor: '#392F63',
    alignItems: 'center',
    paddingVertical: 30,
  },
  img: {
    height: 244,
    width: 244,


  },
  temperature: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
    marginTop:-7
    
  },
  precipitations: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  tempRange: {
    fontSize: 16,
    color: '#ddd',
    
  },
  house: {
    width: 336,
    height: 198,
    resizeMode: 'contain',
    marginBottom: 20,
  },
 forecastContainer: {
  backgroundColor: '#4E328B',
  bordertRadius: 30,
  borderRadius: 30,
  padding: 16,
  marginTop: 10,
  width: '97%',
  paddingBottom: 20,
},
forecastHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 15,
  paddingHorizontal: 10,
},
forecastDate: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',

},
hourBlock: {
  alignItems: 'center',
  marginHorizontal: 14,
 marginLeft:29
},
hourTemp: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
hourIcon: {
  width: 36,
  height: 36,
  marginVertical: 6,
},
hourTime: {
  fontSize: 14,
  color: '#ccc',
},
});
