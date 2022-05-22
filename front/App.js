import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "./src/views/auth/Signup";
import Signin from "./src/views/auth/Signin";
import { useEffect, useState } from "react";
import HomeScreen from "./src/views/HomeScreen";
import IntroSlider from "./src/views/IntroSlide";
import { getUserData } from "./src/utils/AsyncStorageFunctions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Donate from "./src/views/tabs/Donate";
import Notifications from "./src/views/tabs/Notifications";
import Profile from "./src/views/tabs/Profile";
import CenterLocation from './src/views/CenterLocation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState("");

  useEffect(async () => {
    setUser(await getUserData());
  }, []);


  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#f3607b' : 'black',opacity:0.8}}>Home</Text>
            ),            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: 25, height: 25,opacity:0.9 }}
                  source={focused?require('./src/images/homefocused.png'):require('./src/images/home.png')}
                />
              );
            },
          }}
          name="home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#f3607b' : 'black',opacity:0.8}}>Donate</Text>
            ),
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: 25, height: 25,opacity:0.9 }}
                  source={focused?require('./src/images/heartfocused.png'):require('./src/images/heart.png')}

                />
              );
            },
          }}
          name="donate"
          component={Donate}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#f3607b' : 'black',opacity:0.8}}>Notifications</Text>
            ),
            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: 25, height: 25,opacity:0.9 }}
                  source={focused?require('./src/images/bellfocused.png'):require('./src/images/bell.png')}

                />
              );
            },
          }}
          name="notification"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? '#f3607b' : 'black',opacity:0.8}}>Profile</Text>
            ),            tabBarOptions: {
              showIcon: true,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ width: 25, height: 25,opacity:0.9 }}
                  source={focused?require('./src/images/userfocused.png'):require('./src/images/user.png')}

                />
              );
            },
          }}
          name="profile"
          component={Profile}
        />
      </Tab.Navigator>
    );
  }

  if (user === "") {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user == null ? "introslide" : "tabs"}>
          <Stack.Screen
            name="introslide"
            options={{ headerShown: false }}
            component={IntroSlider}
          />
              <Stack.Screen name="location" options={{ headerShown: false }}  component={CenterLocation} />


          <Stack.Screen
            options={{ headerShown: false }}
            name="signup"
            component={Signup}
          />
          <Stack.Screen
            name="signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
