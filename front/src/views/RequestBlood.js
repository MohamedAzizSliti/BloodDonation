import { View, Text, Image, ScrollView,Linking, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const RequestBlood = ({ route, navigation }) => {
  const [banks, setBanks] = useState([{name:"Hopital Rades",number:91909090,location:"Ben arous, Rades"},{name:"Hopital Tunis",number:20202121,location:"Ben arous ,El yasminette"},{name:"Hopital Zaghouen",number:15252525,location:"Ben arous ,Zaghouen"},{name:"National blood donation center",number:50505050,location:"Tunis, Tunis"},{name:"Béja national donation",number:21212121,location:"Béja"},{name:"Hospital Charles Nicolle",number:71764033,location:"Tunis"},{name:"Hôpital régional de Zaghouan",number:72676700,location:"l'Environnement, Zaghouan"}]);
  return (
    <View
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, margin: 10 }}>
        Available Blood banks for{" "}
        <Text style={{ color: "#f3607b", fontWeight: "bold" }}>
          {route.params.bloodtype}
        </Text>
      </Text>
<ScrollView contentContainerStyle={{alignSelf:'center'}}>
    {banks.map((el)=>
    <TouchableOpacity onPress={()=>Linking.openURL(`tel:${el.number}`)}
    style={{
      display: "flex",
      flexDirection: "row",
      width: "80%",
      backgroundColor: "white",
      borderBottomColor: "gray",
      borderBottomWidth: 2,
      justifyContent: "space-between",
      marginVertical: 15,
    }}
  >
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Image
        style={{ width: "100%", height: undefined, aspectRatio: 1 }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2069/2069788.png",
        }}
      ></Image>
    </View>
    <View
      style={{
        flex: 4,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 12 }}>{el.name}</Text>
      <Text style={{ fontSize: 12 }}>Phone Number : {el.number}</Text>
      <Text style={{ fontSize: 12 }}>{el.location}</Text>
    </View>
    <View
      style={{
        flex: 1,

        padding: 10,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ aspectRatio: 0.6, flex: 1 }}
        source={{
          uri: "https://i.ibb.co/3T9Ws4D/Nice-Png-location-sign-png-4318534.png",
        }}
      />
    </View>
  </TouchableOpacity>)}

      </ScrollView>
      
    </View>
  );
};

export default RequestBlood;
