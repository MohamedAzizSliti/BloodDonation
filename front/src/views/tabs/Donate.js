import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Donate = ({navigation}) => {
  const [selected, setSelected] = useState("A+");
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{ fontSize: 18, fontWeight: "normal", opacity: 0.8, margin: 15 }}
      >
        SELECT THE BLOOD TYPE YOU NEED
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => setSelected("A+")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "A+" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            A+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("A-")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "A-" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            A-
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => setSelected("B+")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "B+" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            B+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("B-")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "B-" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            B-
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => setSelected("AB+")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "AB+" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            AB+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("AB-")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "AB-" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            AB-
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => setSelected("O+")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "O+" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            O+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("O-")}>
          <Text
            style={{
              borderColor: "#f3607b",
              borderWidth: 1,
              padding: 20,
              width: 100,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: selected == "O-" ? "#ddd" : "white",
              fontSize: 18,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            O-
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("requestblood", {
        bloodtype: selected,
      })}
        style={{
          backgroundColor: "#f3607b",
          padding: 15,
          paddingHorizontal: 50,
          margin: 25,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Request Blood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Donate;
