import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Modal, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import LoginInput from '../components/login-input';
import MainTabBar from '../navigation/main_tab_bar';
import Logo from '../assets/icons/logo.svg';
import Close from '../assets/icons/close.svg';

import firebase from '../services/datastore';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const auth = firebase.auth(); 

function LoginPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const onLogin = async () => {
      try {
        if (inputEmail !== '' && inputPassword !== '') {
          await auth.signInWithEmailAndPassword(inputEmail, inputPassword);
        }
      } catch (error) {
        // setLoginError(error.message);
        alert(error.message);
      }
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      {/* <Image style={styles.logo} source={require('../images/fake-logo.png')}></Image> */}
      <LoginInput autoCapitalize='none' keyboardType='email-address' textContentType="emailAddress" value={inputEmail} onChangeText={text => setInputEmail(text)} backgroundColor='#545454' textColor='#FCFFFF' placeholder="Email"></LoginInput>
      <LoginInput autoCapitalize='none' textContentType="password" value={inputPassword} onChangeText={text => setInputPassword(text)} placeholder="Password" backgroundColor='#545454' textColor='#FCFFFF' secure={passwordVisibility}></LoginInput>
      <View style={styles.flexContainer}>
        <Text style={[styles.option, styles.link]} onPress={() => setModalVisible(true)}>Forgot Password?</Text>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
          <View style={styles.modalView}>
            <Pressable style={{ position: 'absolute', top: 10, right: 10}}onPress={() => {setModalVisible(!modalVisible); console.log('presssed');}}>
              {/* <Text style={{ position: 'absolute', top: 10, right: 10, fontSize:25, zIndex: 90}}>x</Text> */}
              <Close />
            </Pressable>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Forgot Password?</Text>
              <Text style={styles.modalText}>Input your email, and we’ll send you a temporary password to use to log in.</Text>
              <LoginInput placeholder="Email" value={resetEmail} onChangeText={text => setResetEmail(text)} backgroundColor='#E3EFF0'></LoginInput>
              <TouchableHighlight style={[styles.signbutton, {width: windowWidth * .6}]} onPress={() => {auth.sendPasswordResetEmail(resetEmail).then(alert('email sent!')); setModalVisible(!modalVisible)}}>
                <Text style={styles.buttontext}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
      </Modal>
      <TouchableHighlight style={[styles.signbutton, {width: windowWidth * .9}]} onPress={onLogin}>
        <Text style={styles.buttontext}>Sign in</Text>
      </TouchableHighlight>
      <Text style={styles.link} onPress={() => navigation.navigate('Create')}>Or Create Account</Text>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#FCFFFF',
  },
  option: {
    flex: 1,
    textAlign: 'center'
  },
  container: {
    fontSize: 30,
    margin: 0,
    padding: 0,
    paddingTop: 100,
    height: windowHeight,
    backgroundColor: '#373737',
    alignItems: 'center',
    width: windowWidth,
  },
  logo: {
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 50,
    width: 150,
    height: 150,
    margin: 30
  },
  flexContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  buttontext: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 45,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    shadowOffset:  {width: 3,height: 3},
  },
  modalView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    margin: 7,
    // padding: 10,
    // paddingBottom: 30,
    shadowColor: "#000",
    width: windowWidth * .8,
    // height: windowHeight * .3,
    marginBottom: windowHeight * .25,
    marginTop: windowHeight * .25,
  },
  modalContent: {
    // padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  modalTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 10,
  },
  modalText: {
    fontSize: 15,
    padding: 25,
    textAlign: 'center',
  },
  signbutton: {
    backgroundColor: '#469C97',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    margin: 20,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    shadowOffset:  {width: 3,height: 3},
  },
});

export default LoginPage;