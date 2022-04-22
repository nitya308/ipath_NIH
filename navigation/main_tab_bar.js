import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';

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
        <Tab.Screen name="Home" component={HomePage} options={{
          headerShown: false
        }}/>
        <Tab.Screen name="Survey" component={SearchTab} />
        <Tab.Screen name="History" component={AboutTab} />
        <Tab.Screen name="Explore" component={AboutTab} />
        <Tab.Screen name="Profile" component={AboutTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;