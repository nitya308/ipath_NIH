import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Chart from '../assets/icons/chart.svg';
import { connect, useSelector } from 'react-redux';
import { fetchTreatments, fetchSavedTreatments, fetchLastSurveyed } from '../actions/index';
import Clipboard from '../assets/icons/clipboard';
import List from '../assets/icons/list';
import { updatePageView } from '../services/datastore';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from '../assets/icons/HomeIcon.svg'
import ProfileButtonIcon from '../assets/icons/ProfileButton.svg'
import PCircle from '../components/survey/p-circle.js';
import {fetchFirstName } from '../actions';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function HomePage(props) {
  const user = useSelector((state) => state.user)
  useEffect(() => {
    const fetch1 = async () => { props.fetchTreatments(); }
    const fetch2 = async () => { props.fetchSavedTreatments(user.userId); }
    const firstName = async () => { fetchFirstName(user.userId); }
    firstName();
    fetch1();
    fetch2();
  }, [])

  const firstNameValue = useSelector((state) => state.user.firstName);

  const navigateTo = (name) => {
    props.navigation.navigate(name);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableHighlight style={styles.profilebutton} onPress={() => {console.log("pressed"); navigateTo("Profile")}}>
          <ProfileButtonIcon ></ProfileButtonIcon>
        </TouchableHighlight>
        <Text style={styles.subtitle}>Good Morning,</Text>
        <Text style={styles.title}>{firstNameValue}!</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.colText}>Welcome to iPath! Your decision aid tool</Text>
          <HomeIcon style={styles.homeicon}></HomeIcon>
        </View>
        <TouchableHighlight style={styles.surveyTouchContainer} underlayColor='gray' onPress={() => { navigateTo("Survey"); updatePageView(`${user.userId}`, "page_1"); }}>
          <View style={styles.rowContainer}>
            <Text style={styles.surveyButtonText}>We recommend taking the Depression Screening Survey (PHQ-9) again in</Text>
            <View style={styles.progcircle}>
              <PCircle></PCircle>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
  colText: {
    flex: 1,
    fontSize: 18,
    paddingTop: 150
  },
  surveyButtonText: {
    flex: 2,
    fontSize: 17,
    lineHeight: 25,
    padding: 20,
  },
  description: {
    fontFamily: 'Poppins-Italic',
    fontStyle: 'italic',
    fontSize: 16,
    padding: 15,
    color: 'white'
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    width: windowWidth * .8
  },
  parallelButtons: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  surveyTouchContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    height: 120,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  progcircle: {
    flex: 1,
    paddingVertical: 10,
    paddingEnd: 20,
  },
  profilebutton: {
    position: 'absolute',
    right: 15,
    top: 10,
    borderRadius: 20,
  },
  mediumTouchContainer: {
    width: 145.06,
    backgroundColor: '#000000',
    height: 130,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  additionalTouchContainer: {
    flex: 0,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000000',
    height: 65,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonContainer: {
    width: '80%',
    height: '100%'
  },
  chart: {
    position: 'absolute',
    top: 70,
    left: -20,
  },
  buttonTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'white',
    padding: 15
  },
});

export default connect(null, { fetchTreatments, fetchSavedTreatments, fetchFirstName })(HomePage);