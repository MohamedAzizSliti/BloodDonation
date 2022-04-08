import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './src/views/auth/Signup';
import Signin from './src/views/auth/Signin';
import IntroSlider from './src/views/IntroSlide';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen name="introslide" options={{ headerShown: false }}  component={IntroSlider} />

    <Stack.Screen name="signup" component={Signup} />
    <Stack.Screen name="signin" component={Signin} />

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
