import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import { useNavigation } from '@react-navigation/native'


const MainScreen = () => {
    // const navigation = useNavigation()
    return (
         <View style={styles.Container} >
            <Image source={require("../assets/image/cloud.png")} style={styles.img} resizeMode='contain' />
            <Text style={styles.wtext}>Weather</Text>
            <Text style={styles.ftext}>ForeCasts</Text>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttontext}>Get Start</Text>
            </TouchableOpacity>
              
        </View>




    )
}

export default MainScreen

const styles = StyleSheet.create({
    Container: {
 flex: 1,
     backgroundColor: '#392F63',
    alignItems: 'center',
    paddingVertical: 30,
  },
    img:
        { height: 400,
         width: 400 },
    wtext: {
       
        fontSize: 64,
        color: "white",
        textAlign: "center",
        marginTop: 9
    },

    ftext: {
        
        fontSize: 64,
        color: "#DDB130",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#DDB130",
        marginTop: 50,
        marginLeft: 105,
        marginRight: 105,
        borderRadius: 50,
        borderWidth: 1,
    },
    buttontext: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 25,
        marginTop: 6,
        color: "blue"
    }
})