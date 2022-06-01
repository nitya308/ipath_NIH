import React from 'react';
import HomePage from '../screens/homePage';
import EmptyScreen from '../screens/emptyScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Back to Home" component={HomePage} options={{
        headerShown: false
      }} />
      <Stack.Screen name="History" component={EmptyScreen} />
      <Stack.Screen name="Additional Resources" component={EmptyScreen}/>
    </Stack.Navigator>
  );
}

export default HomeStack;