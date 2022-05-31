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

import Routes from './src/navigation/index';

import rootReducer from './src/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
