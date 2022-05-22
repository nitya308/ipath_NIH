import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import { createUser } from '../services/datastore';

// import Chart from '../assets/icons/chart.svg';
// import LoginInput from '../components/login-input';
// import { getUserDoc, updateFavTreatment, deleteFavTreatment, getUserSurveyRes, addSurveyRes, getTreatments, addClick } from '../services/datastore';
import firebase from '../services/datastore';
const auth = firebase.auth(); 

function CreateAccountPage({ navigation }) {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const onHandleSignup = async () => {
    try {
      if (inputEmail !== '' && inputPassword !== '') {
        const userCredential = await auth.createUserWithEmailAndPassword(inputEmail, inputPassword)
        createUser(userCredential.user.uid, userCredential.user.email)
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.flexContainer}>
        {/* <TextInput placeholder="Name"></TextInput> */}
        <TextInput style={styles.input} value={inputEmail} keyboardType='email-address' textContentType='emailAddress' autoFocus={true} onChangeText={(text) => setInputEmail(text)} placeholder="Email"></TextInput>
        <TextInput style={styles.input} value={inputPassword} onChangeText={(text) => setInputPassword(text)} placeholder="Password" secure='true'></TextInput>
        {/* <TextInput placeholder="Confirm Password" secure='true'></TextInput> */}
        <TouchableHighlight style={styles.signbutton} onPress={onHandleSignup}>
          <Text style={styles.buttontext}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.signbutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttontext}>Go to login</Text>
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
  input: {
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateAccountPage;