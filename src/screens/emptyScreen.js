import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { fetchLastSurveyed, fetchFirstName } from '../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

function EmptyScreen(props, { navigation }) {
  const user = useSelector((state) => state.user);
  // console.log('PRINTING User OBJECT FROM EmptyScreen.js \n', user);
  // console.log('PRINTING props OBJECT FROM EmptyScreen.js \n', props);

  useEffect(() => {
    const lastDate = async () => { fetchLastSurveyed(user.userId); }
    lastDate();
    console.log('printing user in useefffect', user);
    const firstName = async () => { fetchFirstName(user.userId); }
    firstName();
  }, []);

  const lastSurveyedValue = useSelector((state) => state.user.lastSurveyed);
  const firstNameValue = useSelector((state) => state.user.firstName);
  // const lastSurveyedDate = new Date(lastSurveyedValue);
  console.log('PRINTING LSD OBJECT FROM EmptyScreen.js \n', lastSurveyedValue);
  const date1 = new Date(lastSurveyedValue)
  const date2 = new Date()
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));
  const daysRemaining = 14 - diffDays;
  const percentRemaining = 100 * (daysRemaining / 14);
  console.log('date from LSD:\n', date1);
  console.log('current date:\n', date2);
  console.log('difference in time:\n', diffTime);
  console.log('difference in days:\n', diffDays);

  // const ctdn = new Date().toISOString - lastSurveyedDate


  return (
    <View style={styles.flexContainer}>
      <Text style={styles.italicSubheading}> {firstNameValue}, You last took the survey on: {lastSurveyedValue}</Text>
      <Text style={styles.italicSubheading}>Days Remaining Until Next Survey: </Text>
      <View style={styles.borderSwiper}>
        <Swiper style={styles.wrapper} 
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        paginationStyle={styles.paginate}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
          <View style={styles.slides}>
            <Text style={styles.text}>Depression is more common than you might think – especially for cancer patients. 1 in 4 adults with cancer experience symptoms of depression, but the good  news is it can be managed!</Text>
          </View>
          <View style={styles.slides}>
            <Text style={styles.text}>There’s a treatment out there for everyone. Some people prefer to meet with a physician while others like to receive care in a self-guided way. Learn more about treatment types in the “Learn” tab. </Text>
          </View>
          <View style={styles.slides}>
            <Text style={styles.text}>It can be overwhelming to sift through so many treatment options. That’s where iPath can help! Set your preferences and browse options that might work for you under the “Treatments” tab.</Text>
          </View>
        </Swiper>
      </View>
      <ProgressCircle
        percent={percentRemaining}
        radius={50}
        borderWidth={10}
        color="#469C97"
        bgcolor="fff"
        shadowColor="#999">
        <Text style={{ fontFamily: 'Poppins-Regular' }}> {daysRemaining} </Text>
      </ProgressCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontFamily: 'Poppins-Regular',
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
  },
  wrapper: {
    borderRadius: 10,
  },
  slides: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#5451F8',
    borderRadius: 10,
    margin: 15,
  },   
  text: {
    color: '#FCFCFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    margin: 20,
  },
  borderSwiper:{
    borderRadius:20,
    height: 180,
  },
  dot: {
    backgroundColor: '#FCFCFF',
  },
  activeDot: {
    backgroundColor: '#5451F8',
    borderWidth: 1,
    borderColor: '#FCFCFF',
  },
  paginate: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  }
});

export default connect(null, { fetchLastSurveyed, fetchFirstName })(EmptyScreen);