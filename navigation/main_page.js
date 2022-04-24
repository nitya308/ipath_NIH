import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../screens/firstPage';
import LoginPage from '../screens/loginPage';

const Stack = createNativeStackNavigator();

const HomePages = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={FirstPage}/>
        <Stack.Screen name="Login Page" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomePages;

