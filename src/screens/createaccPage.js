import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Chart from '../assets/icons/chart.svg';
import LoginInput from '../components/login-input';
import { getUserDoc, updateFavTreatment, deleteFavTreatment, getUserSurveyRes, addSurveyRes, getTreatments, addClick } from '../services/datastore';


function CreateAccountPage(props) {
  const navigateTo = (name) => {
    props.navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.flexContainer}>
        <LoginInput placeholder="Name"></LoginInput>
        <LoginInput placeholder="Email"></LoginInput>
        <LoginInput placeholder="Password" secure='true'></LoginInput>
        <LoginInput placeholder="Confirm Password" secure='true'></LoginInput>
        <TouchableHighlight style={styles.signbutton} onPress={() => "add create acc logic"}>
          <Text style={styles.buttontext}>Sign in</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 50,
    marginTop: 10,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: windowWidth * .8,
    marginTop: 50,
  },
  place: {
    width: '100%',
    flex: 1,
  },
  signbutton: {
    backgroundColor: '#469C97',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
    borderRadius: 25,
    height: 50,
    margin: 20,
    marginTop: 60,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 3 },
  },
  buttontext: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
  },
});

export default CreateAccountPage;