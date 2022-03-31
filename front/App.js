import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './src/views/auth/Signup';
import Signin from './src/views/auth/Signin';
import { useState } from 'react';
import HomeScreen from './src/views/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}}  name="signup" component={Signup} />
    <Stack.Screen name="signin" component={Signin} options={{headerShown: false}}  />
    <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}  />

  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  
  alignItems: 'center',
    justifyContent: 'center',
  },
});
