import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import LoginInput from '../components/login-input';

function LoginPage({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/fake-logo.png')}></Image>
      <LoginInput placeholder="Username"></LoginInput>
      <LoginInput placeholder="Password"></LoginInput>
      <View style={styles.flexContainer}>
        <Text style={styles.option}>Stay logged in?</Text>
        <Text style={styles.option}>Forgot Password</Text>
      </View>
      <Button></Button>
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
    margin: 0,
    padding: 0,
    marginTop: 70
  },
  logo: {
    alignSelf: 'center',
    alignContent: 'center',
    width: 150,
    height: 150,
    margin: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    height: 150,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    margin: 8,
  },
  buttonContent: {
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
    fontSize: 20
  }
});

export default LoginPage;