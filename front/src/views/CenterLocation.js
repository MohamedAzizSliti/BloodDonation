import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import BDC from "../../assets/blood-drop.png";
import Donor from "../../assets/donor.png";

import axios from "axios";

import Loading from "../components/Loading";
const CenterLocation = () => {
  const [location, setLocation] = useState(null);
  const [center, setCenters] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  function getlocation(value) {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }
  function getAllBDC() {
    axios.get(`http://192.168.1.45:5000/api/center`).then((res) => {
      setCenters(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    getAllBDC();

    getlocation();
    console.log("seconds 10");

    return () => {
      console.log("Cleaning useEffect");
    };
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  if (location == null) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={"title"}
          description={"marker.description"}
        >
          <Image source={Donor} style={{ height: 32, width: 32 }} />
        </Marker>
        {center != null
          ? center.map((el) => (
              <Marker
                key={el._id}
                onPress={()=>console.log(el._id)}
                coordinate={{
                  latitude: el.latitude,
                  longitude: el.longitude,
                }}
                title={el.name}
                description={"Blood Donation Center"}
              >
                <Image source={BDC} style={{ height: 40, width: 40 }} />
              </Marker>
            ))
          : null}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default CenterLocation;
