import React, { useContext}  from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import HomeStack from './HomeNavigation';
import SurveyPage from '../screens/surveyPage';
import TreatmentPage from '../screens/treatmentPage';
import TreatmentFlowPage from '../screens/treatmentFlowPage';
import ProfileButton from '../components/profileButton';

// TODO: AUTH
import firebase from '../services/datastore';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
const auth = firebase.auth();

import Home from '../assets/icons/home';
import Clipboard from '../assets/icons/clipboard';
import Book from '../assets/icons/book';
import List from '../assets/icons/list'; 

const Tab = createBottomTabNavigator();

function MainTabBar(props){

  const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
  });

  return (
      <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "#469C97",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
        <Tab.Screen name="Home" component={HomeStack} 
        options={{
        headerShown: false,
        tabBarIcon: ({color}) => (
           <Home width="30" height="30" strokeWidth="10" strokeColor={color}/>
        )
        }}/>
        <Tab.Screen name="Survey" component={SurveyPage} options={{
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Clipboard width="30" height="30" strokeWidth="10" strokeColor={color}/>
       )}}
        listeners={tabBarListeners}/>
        <Tab.Screen name="Learn" component={TreatmentPage} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Book width="30" height="30" strokeWidth="10" strokeColor={color}/>
         )}}
         listeners={tabBarListeners}/>
        <Tab.Screen name="Treatments" component={TreatmentFlowPage} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <List width="35" height="35" fill={color} strokeWidth="10" strokeColor={color}/>
        )}} 
        listeners={tabBarListeners}/>
      </Tab.Navigator>
  );
};

export default MainTabBar;