import { StatusBar, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient'


const IntroSlider = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Swiper   loop={false} dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />} index={0} >

        <View style={styles.slide1}>

          <Image
            source={require("./../../assets/blood.png")} style={styles.image}

          />
          <View>
            <Text style={styles.text1} >BLOOD DONATION</Text>

            <Text style={styles.text2} >Is social media platform of Blood Donation</Text>
          </View>

        </View>

        <View style={styles.slide1}>
          <Image
            source={require("./../../assets/donor_2.png")} style={styles.image}
          />
          <View>
            <Text style={styles.text1} >100% Free</Text>

            <Text style={styles.text2} >We never take money and we never make money from blood </Text>
          </View>

        </View>

        <View style={styles.slide1}>
          <Image
            source={require("./../../assets/blood-donation.png")} style={styles.image}
          />
          <View>
            <Text style={styles.text1} >Find Blood Donor</Text>

            <Text style={styles.text2} >Calling hundreds of Donor is no more required using our platform </Text>
            <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
navigation.navigate("signup")              }}
            >
              <LinearGradient
                colors={["#f3607b", "#fc8783"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

          </View></View>

        </View>
      </Swiper>
   
    </View>



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',

    marginTop: StatusBar.currentHeight,

  },

  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

  slide1: {
    flex: 2,
    alignItems: 'center',
    justifyContent:"center",

  },

  image: {

    height: 200,
    width: 200


  },
  text1: {
    color: 'black',
    fontWeight:"bold",
    fontSize: 28,
    textAlign: 'center',

    padding: "5%"
  },
  text2: {
    color: '#808080',
    fontSize: 22,
    textAlign: 'center',  
  
    padding: "5%"
  }
})

export default IntroSlider;

