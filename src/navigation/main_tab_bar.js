import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import SurveyPage from '../screens/surveyPage';
import TreatmentPage from '../screens/treatmentPage';
import TreatmentsList from '../components/treatment/treatments-list'
import ProfileButton from '../components/profileButton';
import Home from '../assets/icons/home';
import Clipboard from '../assets/icons/clipboard';
import Book from '../assets/icons/book';
import List from '../assets/icons/list'; 

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const Tab = createBottomTabNavigator();

function MainTabBar(props){
  const headerOptions = () => ({
    headerTitle: "iPath",
    headerStyle: headerStyling,
    headerRight: () => <ProfileButton navigate={() => props.navigation.navigate("Profile")}/>,
    headerTitleContainerStyle: headerTitleContainerStyling,
    headerBackgroundContainerStyle: {
      margin:0,
      padding: 0
    }
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
        <Tab.Screen name="Home" component={HomePage} 
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
       )}}/>
        <Tab.Screen name="Learn" component={TreatmentPage} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Book width="30" height="30" strokeWidth="10" strokeColor={color}/>
         )}}/>
        <Tab.Screen name="Treatments" component={TreatmentsList} options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <List width="35" height="35" fill={color} strokeWidth="10" strokeColor={color}/>
        )}} />
      </Tab.Navigator>
  );
};
const windowHeight= Dimensions.get('window').height;

const headerStyling = {
  backgroundColor: '#F9FBFB',
  height: windowHeight * .12,
};

const headerTitleContainerStyling = {
  padding: 0,
  margin: 0,
}



export default MainTabBar;