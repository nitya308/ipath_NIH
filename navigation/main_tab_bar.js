import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homePage';
import SurveyPage from '../screens/surveyPage';
import TreatmentPage from '../screens/treatmentPage';
import TreatmentsList from '../components/treatment/treatments-list'
import ProfileButton from '../components/profileButton';

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const Tab = createBottomTabNavigator();

function MainTabBar(props){
  const headerOptions = () => ({
    headerTitle: "iPath",
    headerStyle: headerStyling,
    headerRight: () => <ProfileButton navigate={() => props.navigation.navigate("Profile")}/>,
    // headerTitleStyle: headerTitleStyling,
    headerTitleContainerStyle: headerTitleContainerStyling,
    headerBackgroundContainerStyle: {
      margin:0,
      padding: 0
    }
  });

  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        <Tab.Screen name="Survey" component={SurveyPage} options={{headerShown: false}}/>
        <Tab.Screen name="Learn" component={TreatmentPage} options={{headerShown: false}}/>
        <Tab.Screen name="Treatments" component={TreatmentsList} options={{headerShown: false}} />
      </Tab.Navigator>
  );
};
const windowHeight= Dimensions.get('window').height;

const headerStyling = {
  backgroundColor: '#F9FBFB',
  height: windowHeight * .12,
};

// const headerTitleStyling = {
//   color: 'white',
// }

const headerTitleContainerStyling = {
  padding: 0,
  margin: 0,
}



export default MainTabBar;