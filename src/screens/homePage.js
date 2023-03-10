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
import { fetchFirstName } from '../actions';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SwiperComponent from '../components/homepage/swiper';



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
      <View style={windowHeight < 670? styles.containerSS : styles.container}>
        <TouchableHighlight style={styles.profilebutton} onPress={() => { navigateTo("Profile") }}>
          <ProfileButtonIcon ></ProfileButtonIcon>
        </TouchableHighlight>
        {firstNameValue ?
          <View><Text style={styles.subtitle}>Good Morning,</Text>
            <Text style={styles.title}>{firstNameValue}!</Text></View>
          : <View><Text style={styles.subtitle}>Good Morning!</Text>
            <Text style={styles.title}>{'   '}</Text></View>}

        <SwiperComponent></SwiperComponent>

        <View style={styles.rowContainer}>
          <View><Text style={styles.colText}>Welcome to iPath! Your decision aid tool</Text></View>
          <View><HomeIcon width={windowWidth * 0.4} style={styles.homeicon}></HomeIcon></View>
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
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#E9E9FA',
    height: windowHeight * 0.85,
  },
  containerSS: {
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#E9E9FA',
    height: windowHeight * 0.9,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'magenta',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
  },
  subtitle: {
    fontSize: 20,
  },
  colText: {
    flexDirection: 'column',
    fontSize: 18,
    padding: 0,
    paddingTop: 120,
    width: windowWidth * 0.48,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontFamily: 'Poppins-Light',
    color: '#373737'

  },
  surveyButtonText: {
    flex: 2,
    fontSize: 15,
    lineHeight: 25,
    padding: 20,
    fontFamily: 'Poppins-Regular',
    color: '#373737',
    // flexWrap: 'wrap',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    width: windowWidth * .8
  },
  surveyTouchContainer: {
    width: '100%',
    // marginTop: windowHeight*0.09,
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
    alignSelf: 'flex-end',
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
  buttonContainer: {
    width: '80%',
    height: '100%'
  },
  buttonTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'white',
    padding: 15
  },
  homeicon: {
    height: windowHeight * 0.005,
    width: windowWidth * 0.003,
  },
  welcomeIconAndSurvey: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});

export default connect(null, { fetchTreatments, fetchSavedTreatments, fetchFirstName })(HomePage);