import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import SurveyPage from '../screens/surveyPage';
import TreatmentPage from '../screens/treatmentPage';

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const SearchTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>Search</Text></View>;
};

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} options={headerOptions}/>
        <Tab.Screen name="Survey" component={SurveyPage} options={headerOptions}/>
        <Tab.Screen name="History" component={AboutTab} options={headerOptions}/>
        <Tab.Screen name="Explore" component={TreatmentPage} options={headerOptions} />
        <Tab.Screen name="Profile" component={AboutTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const windowHeight= Dimensions.get('window').height;

const headerStyling = {
  backgroundColor: 'gray',
  height: windowHeight * .12,
};

const headerTitleStyling = {
  color: 'white',
}

const headerTitleContainerStyling = {
  padding: 0,
  margin: 0,
}

const headerOptions = {
  headerTitle: "iPath",
  headerStyle: headerStyling,
  headerTitleStyle: headerTitleStyling,
  headerTitleContainerStyle: headerTitleContainerStyling,
  headerBackgroundContainerStyle: {
    margin:0,
    padding: 0
  }
}

export default MainTabBar;