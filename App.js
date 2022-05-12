import HomePages from './src/navigation/main_page';
import MainTabBar from './src/navigation/main_tab_bar';
import Profile from './src/screens/profilePage';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from "react";
import ProfileButton from './src/components/profileButton';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './src/reducers';

const Stack = createStackNavigator();
const store = configureStore({
  reducer: rootReducer,
});

export default function App() {

  const [isSignedIn, setSignIn] = React.useState(true);
  
  const signIn = () => {
    setSignIn(prev => ({ status: !prev.status }));
  };
  const headerOptions = ({navigation, route}) => ({
    headerTitle: "iPath",
    headerStyle: headerStyling,
    headerRight: () => <ProfileButton navigate={() => navigation.navigate("Profile")}/>,
    // headerTitleStyle: headerTitleStyling,
    headerTitleContainerStyle: headerTitleContainerStyling,
    headerBackgroundContainerStyle: {
      margin:0,
      padding: 0
    }
  });
  const windowHeight= Dimensions.get('window').height;

const headerStyling = {
  backgroundColor: '#F9FBFB',
  height: windowHeight * .12,
  };

  const headerTitleContainerStyling = {
    padding: 0,
    margin: 0,
  }
  return (
    <Provider store={store}>
      {isSignedIn?
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="HomePage" component={MainTabBar} options={headerOptions}/>
          <Stack.Screen name="Profile" component={Profile} options={headerOptions}/>
        </Stack.Navigator>
      </NavigationContainer>
      :
      <HomePages/>}
    </Provider>
  );
}

