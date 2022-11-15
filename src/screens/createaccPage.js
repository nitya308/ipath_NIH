import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import { createUser } from '../services/datastore';
import LoginInput from '../components/login-input';

// import Chart from '../assets/icons/chart.svg';
// import LoginInput from '../components/login-input';
// import { getUserDoc, updateFavTreatment, deleteFavTreatment, getUserSurveyRes, addSurveyRes, getTreatments, addClick } from '../services/datastore';
import firebase from '../services/datastore';
const auth = firebase.auth(); 

function CreateAccountPage({ navigation }) {

  const [inputEmail, setInputEmail] = useState('');
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [renderPasswordError, setRenderPasswordError] = useState(false);

  const onHandleSignup = async () => {
    try {
      if (inputEmail !== '' && inputPassword !== '') {
        if(inputPassword !== inputConfirmPassword){
          setRenderPasswordError(true);
        } else{
          const userCredential = await auth.createUserWithEmailAndPassword(inputEmail, inputPassword)
          createUser(userCredential.user.uid, userCredential.user.email, inputFirstName)
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.flexContainer}>
        <LoginInput style={styles.input} value={inputEmail} keyboardType='email-address' textContentType='emailAddress' autoFocus={true} onChangeText={(text) => setInputEmail(text)} placeholder="Email" backgroundColor="#E9E9FA" />
        <LoginInput style={styles.input} value={inputFirstName} autoFocus={true} onChangeText={(text) => setInputFirstName(text)} placeholder="First Name" backgroundColor="#E9E9FA" />
        <LoginInput style={styles.input} onFocus={() => setRenderPasswordError(false)} value={inputPassword} textContentType='none' onChangeText={(text) => setInputPassword(text)} placeholder="Password" secure={true} backgroundColor="#E9E9FA"/>
        <LoginInput style={styles.input} onFocus={() => setRenderPasswordError(false)} value={inputConfirmPassword} textContentType='none' autoCapitalize='none' onChangeText={(text) => setInputConfirmPassword(text)} placeholder="Confirm Password" secure={true} backgroundColor="#E9E9FA"/>
        {renderPasswordError ? <Text style={styles.errorMessage}>Passwords do not match</Text> : null }
        <TouchableHighlight style={styles.signbutton} onPress={onHandleSignup}>
          <Text style={styles.buttontext}>Create Account</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight style={styles.signbutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttontext}>Go to login</Text>
        </TouchableHighlight> */}
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FCFFFF',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: windowWidth,
    marginTop: 50,
    alignItems: 'center',
  },
  place: {
    width: '100%',
    flex: 1,
  },
  signbutton: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#5451F8',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
    borderRadius: 25,
    height: 50,
    margin: 20,
    marginTop: 20,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 3 },
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttontext: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
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
  errorMessage:{
    color: 'red',
    alignSelf: 'center',
    marginTop: 20,
  }
});

export default CreateAccountPage;