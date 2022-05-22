import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../screens/firstPage';
import LoginPage from '../screens/loginPage';
import MainTabBar from './main_tab_bar';
import CreateAccountPage from '../screens/createaccPage';

const Stack = createNativeStackNavigator();

const HomePages = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="iPath" component={FirstPage}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerBackVisible: false}}/>
        <Stack.Screen name="Create" component={CreateAccountPage} options={{headerBackVisible: false}}/>
      </Stack.Navigator>
  );
};

export default HomePages;

