import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Profile from '../screens/profilePage';
import ProfileButton from '../components/profileButton';
import { connect } from 'react-redux';
import { loginUser, logoutUser, fetchSavedTreatments, fetchLastSurveyed } from '../actions/index';


import firebase from '../services/datastore';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import HomePages from './main_page'
import MainTabBar from './main_tab_bar';

const auth = firebase.auth();
const Stack = createStackNavigator();

function RootNavigator(props) {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (user) {
            props.loginUser({email: user.email, id: user.uid});
            props.fetchSavedTreatments(user.uid);
            props.fetchLastSurveyed(user.uid);
        } else {
            props.logoutUser();
        }
    },[user])
    useEffect(() => {
      // onAuthStateChanged returns an unsubscriber
      const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
        try {
          await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      });
  
      // unsubscribe auth listener on unmount
      return unsubscribeAuth;
    }, []);
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }

    const headerOptions = ({navigation, route}) => ({
        headerTitle: "iPath",
        headerStyle: headerStyling,
        headerRight: () => <ProfileButton navigate={() => navigation.navigate("Profile")}/>,
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
      <NavigationContainer>
        {user ? <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="HomePage" component={MainTabBar} options={headerOptions}/>
          <Stack.Screen name="Profile" component={Profile} options={headerOptions}/>
        </Stack.Navigator> : <HomePages />}
      </NavigationContainer>
    );
  }


export default connect(null, { loginUser, logoutUser, fetchSavedTreatments, fetchLastSurveyed } )(RootNavigator);