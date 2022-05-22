import {
  StyleSheet,
  Text,
  Linking,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const Notifications = () => {
  const [data, setData] = useState([
    {
      id: 1,
      type: "A+",
      icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
      name: "Mohamed Ahmed",
      number: 25742154,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu massa dapibus justo elementum tincidunt non vitae purus. Sed augue orci, dictum a maximus ut, consequat vel leo.",
      location: "Rades ,Ben arous",
    },
    {
      id: 1,
      type: "AB-",
      icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
      name: "Flen Fouleni",
      number: 87985845,
      description:"Mauris sed nunc fringilla, imperdiet sapien aliquam, porta felis. Integer tristique risus at lectus laoreet varius et rhoncus nunc. Donec malesuada laoreet lectus",
      location: "Tunis ,Ben arous",
    },
    {
      id: 1,
      type: "B+",
      icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
      name: "Smira rayes",
      description:"Etiam commodo vitae leo ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fringilla",
      number: 22312524,
      location: "Béja ,Tunis",
    },
    {
      id: 1,
      type: "AB+",
      icon: "https://bootdey.com/img/Content/avatar/avatar4.png",
      name: "Hamida Bohmida",
      number: 85486587,
      location: "El yasminette",
      description:"Phasellus imperdiet velit quis tellus elementum, quis imperdiet neque bibendum. Mauris eget gravida ante. Pellentesque felis nisl, dignissim sed risus ve",
    },
    {
      id: 1,
      type: "O-",
      icon: "https://bootdey.com/img/Content/avatar/avatar5.png",
      name: "Borgi sassi",
      number: 23123457,
      location: "Zaghouen",
      description:"nec blandit dui aliquam nec. Aenean libero eros, convallis a mattis at, porta condimentum augue. Etiam id magna mattis, viverra lectus vitae, blandit tortor.",
    },
    {
      id: 1,
      type: "O-",
      icon: "https://bootdey.com/img/Content/avatar/avatar6.png",
      name: "AAKIM LAHMER",
      number: 87894556,
      description:" vitae luctus sem accumsan tincidunt. Sed semper vulputate leo a porttitor. Phasellus mi nulla, egestas quis tristique in, cursus nec nisi.",
      location: "El manar , tunis",
    },
    {
      id: 1,
      type: "B-",
      icon: "https://bootdey.com/img/Content/avatar/avatar7.png",
      name: "SALSABIL BAYET",
      number: 12121212,
      description:" Vivamus sit amet risus vestibulum, finibus sem non, dictum est. Etiam sit amet nisl ac sem pulvinar pellentesque. Praesent tincidunt ullamcorper viverra.",
      location: "Jbal lahmer , tunis",
    },
  ]);
  return (
    <View>
      <ScrollView>
      {data.map((el) => (
        <TouchableOpacity
          style={[styles.card, { borderColor: "#f3607b" }]}
          onPress={()=>Linking.openURL(`tel:${el.number}`)}>
          <View style={styles.cardContent}>
            <Image
              style={[styles.image, styles.imageContent]}
              source={{
                uri: el.icon,
              }}
            />
            <Text style={styles.name}>{el.name}</Text>
            <Text
              style={[
                styles.name,
                { color: "#f3607b", fontWeight: "bold", fontSize: 25 },
              ]}
            >
{el.type}
            </Text>
          </View>
          <View style={[styles.cardContent, styles.tagsContent]}>
            <Text>
             {el.description}
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              borderTopWidth: 1,
              borderTopColor: "red",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{el.location}</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
                source={{ uri: "https://i.ibb.co/zrxqc8n/clipart489091.png" }}
              ></Image>
              <Text>{el.number}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    margin: 10,
    borderTopWidth: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
    padding: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
});
export default Notifications;
