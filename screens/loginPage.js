import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import LoginInput from '../components/login-input';
import MainTabBar from '../navigation/main_tab_bar';

function LoginPage() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/fake-logo.png')}></Image>
      <LoginInput placeholder="Username"></LoginInput>
      <LoginInput placeholder="Password"></LoginInput>
      <View style={styles.flexContainer}>
        <Text style={styles.option}>Stay logged in?</Text>
        <Text style={[styles.option, styles.link]}>Forgot Password</Text>
      </View>
      <TouchableHighlight style={styles.signbutton} onPress={()=>"add sign in logic"}> 
        <Text style={styles.buttontext}>Sign in</Text>
      </TouchableHighlight>
      <Text style={styles.link}>Or Create Account</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  link:{
   textDecorationLine: 'underline',
   textAlign: 'center'
  },
  option:{
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
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    margin: 20,
    borderWidth: 1,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 45,
  },
});

export default LoginPage;