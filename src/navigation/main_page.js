import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../screens/firstPage';
import LoginPage from '../screens/loginPage';
import MainTabBar from './main_tab_bar';
import CreateAccountPage from '../screens/createaccPage';
import WhatPage from '../screens/whatPage';
import WhyPage from '../screens/whyPage';
import HowPage from '../screens/howPage';

const Stack = createNativeStackNavigator();

const HomePages = (props) => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="iPath" component={FirstPage}/>
        <Stack.Screen name="WhatiPath" component={WhatPage}/>
        <Stack.Screen name="WhyiPath" component={WhyPage}/>
        <Stack.Screen name="HowiPath" component={HowPage}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerBackVisible: false}}/>
        <Stack.Screen name="Create" component={CreateAccountPage} options={{headerBackVisible: false}}/>
      </Stack.Navigator>
  );
};

export default HomePages;

