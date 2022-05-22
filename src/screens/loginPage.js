import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Modal } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import LoginInput from '../components/login-input';
import MainTabBar from '../navigation/main_tab_bar';
import Logo from '../assets/icons/logo.svg';

import firebase from '../services/datastore';
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
      <LoginInput autoCapitalize='none' keyboardType='email-address' textContentType="emailAddress" value={inputEmail} onChangeText={text => setInputEmail(text)} placeholder="Username"></LoginInput>
      <LoginInput autoCapitalize='none' textContentType="password" value={inputPassword} onChangeText={text => setInputPassword(text)} placeholder="Password" secure={passwordVisibility}></LoginInput>
      <View style={styles.flexContainer}>
        {/* <Text style={styles.option}>Stay logged in?</Text> */}
        <Text style={[styles.option, styles.link]} onPress={() => setModalVisible(true)}>Forgot Password?</Text>
      </View>
      <Modal transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ textAlign: 'right' }}>X</Text>
            </Pressable>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Forgot Password?</Text>
              <Text style={styles.modalText}>Input your email, and we’ll send you a temporary password to use to log in.</Text>
              <LoginInput placeholder="Email" value={resetEmail} onChangeText={text => setResetEmail(text)}></LoginInput>
              <TouchableHighlight style={styles.signbutton} onPress={() => auth.sendPasswordResetEmail(resetEmail).then(alert('email sent!'))}>
                <Text style={styles.buttontext}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableHighlight style={styles.signbutton} onPress={onLogin}>
        <Text style={styles.buttontext}>Sign in</Text>
      </TouchableHighlight>
      <Text style={styles.link} onPress={() => navigation.navigate('Create')}>Or Create Account</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  option: {
    flex: 1,
    textAlign: 'center'
  },
  container: {
    fontSize: 30,
    margin: 0,
    padding: 0,
    marginTop: 70,
    height: '100%'
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
  buttontext: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
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
    backgroundColor: "white",
    borderRadius: 10,
    margin: 7,
    padding: 10,
    paddingBottom: 30,
    shadowColor: "#000",
  },
  modalContent: {
    padding: 20,
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
  },
});

export default LoginPage;