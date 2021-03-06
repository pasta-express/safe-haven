import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import WelcomePage from './Welcome';
import SignupPage from './Signup';
import ConsultantProfile from './ConsultantProfile';
import ConsulteeProfile from './ConsulteeProfile';
import PostSignup from './PostSignup';
import ServiceScreen from './ServiceScreen';
import ProfileCard from './ProfileCard';
import PersonDetails from './PersonDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  //this should be updated from user on database
  const [isRegistered, setRegistered] = useState(false)

  useEffect(() => {
    console.log(isRegistered)
  },[isRegistered])

  const SignUpProcess = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
          />
          <Stack.Screen
            name="Signup"
            component={SignupPage}
            initialParams={{setRegistered: setRegistered}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="ConsultantProfile"
            component={ConsultantProfile}
          />
          <Stack.Screen
            name="ConsulteeProfile"
            component={ConsulteeProfile}
          />
          <Stack.Screen
            name="PostSignup"
            component={PostSignup}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Service"
            component={ServiceScreen}
          />
          <Stack.Screen
            name="ProfileCard"
            component={ProfileCard}
          />
          <Stack.Screen
            name="Details"
            component={PersonDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  if (!isRegistered) {
    return <SignUpProcess />
  } else {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fa3cc",
    alignItems: "center",
    justifyContent: "center",
  },
});

