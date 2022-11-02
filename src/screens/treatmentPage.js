import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import TreatmentsOverview from '../components/treatment/treatments-overview';
import TreatmentsComparison from '../components/treatment/treatments-comparison';
import { useScrollToTop, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function TreatmentPage(props) {
  // const [scrollRef, setScrollRef] = useState(null);
  // const [pageNumber, setPageNumber] = useState(0);

  // const scrollRef = useRef(null);
  // const isFocused = useIsFocused();

  // useScrollToTop(useRef({
  //   scrollToTop: () => scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false }),
  // }));

  // useEffect(() => {
  //   setPageNumber(0);
  // }, [isFocused])

  // useEffect(() => {
  //   if (scrollRef) {
  //     scrollRef.current.scrollTo({ x: windowWidth * pageNumber })
  //   }
  // }, [pageNumber])

  // const setTreatment = (treatment) => {
  //   setSelectedTreatment(treatment)
  // }
  // const scrollRight = () => {
  //   setPageNumber(pageNumber + 1)
  //   scrollRef.current.scrollTo({ x: windowWidth * pageNumber })
  // }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Learn about Treatment Types" component={TreatmentsOverview} options={{headerBackTitleVisible: false}}/>
      <Stack.Screen name="Compare Treatment Types" component={TreatmentsComparison} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    margin: 0,
    padding: 0,
  },
  button: {
    height: 150,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    margin: 8,
  },
  buttonContent: {
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
    fontSize: 20
  }
});

export default TreatmentPage;