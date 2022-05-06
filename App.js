import HomePages from './navigation/main_page';
import MainTabBar from './navigation/main_tab_bar';
import Profile from './screens/profilePage';
import { createStackNavigator} from '@react-navigation/stack';
import { View, Text, Dimensions } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from "react";
import ProfileButton from './components/profileButton';

const Stack = createStackNavigator();
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
    isSignedIn?
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={MainTabBar} options={headerOptions}/>
        <Stack.Screen name="Profile" component={Profile} options={headerOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
    :
    <HomePages/>
  );
}

