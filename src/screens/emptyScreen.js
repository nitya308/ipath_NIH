import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { fetchLastSurveyed } from '../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function EmptyScreen(props, { navigation }) {
  const user = useSelector((state) => state.user);
  console.log('PRINTING User OBJECT FROM EmptyScreen.js \n', user);
  console.log('PRINTING props OBJECT FROM EmptyScreen.js \n', props);

  useEffect (() => {
    const lastDate = async () => {fetchLastSurveyed(user.userId);}
    lastDate();
    console.log('printing user in useefffect', user);
    
  }, []);

  const lastSurveyedValue = useSelector((state) => state.user.lastSurveyed);
  const lastSurveyedDate = new Date(lastSurveyedValue);
  console.log('PRINTING LSD OBJECT FROM EmptyScreen.js \n', lastSurveyedDate);
  const ctdn = new Date().toISOString - lastSurveyedDate


  return (
      <View style={styles.flexContainer}>
        <Text style={styles.italicSubheading}>This page should have a progress circle on it.</Text>
        <Text style={styles.italicSubheading}>{ctdn}</Text>
        <ProgressCircle
          percent={50}
          radius={50}
          borderWidth={10}
          color="#469C97"
          bgcolor="fff"
          shadowColor="#999">
            <Text> {LSD} </Text>
        </ProgressCircle>
      </View>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    flex: 2,
  },
  flexContainer: {
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  }
});

export default connect(null, { fetchLastSurveyed })(EmptyScreen);