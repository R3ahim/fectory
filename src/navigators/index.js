import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SplashScreen} from '../screen';
import Plear from '../mother/Plear';
import WelcomeScreen from '../screen/WelcomeScreen';
import SigninScreen from '../screen/SigninScreen';

const Stack = createStackNavigator();
const Navigators = () => {
  return (
   <NavigationContainer >
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Plear' component={Plear}/>
    <Stack.Screen name='Splash' component={SplashScreen}/>
    <Stack.Screen name='Welcome' component={WelcomeScreen}/>
    <Stack.Screen name='Signin' component={SigninScreen}/>
   

   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigators

