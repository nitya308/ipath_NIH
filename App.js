import HomePages from './src/navigation/main_page';
import MainTabBar from './src/navigation/main_tab_bar';
import Profile from './src/screens/profilePage';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, { useEffect } from "react";
import ProfileButton from './src/components/profileButton';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useFonts } from 'expo-font';


import Routes from './src/navigation/index';

import rootReducer from './src/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Italic': require('./src/assets/fonts/Poppins-Italic.ttf'),

  });
  
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
