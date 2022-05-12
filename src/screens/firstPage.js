import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import LoginPage from './loginPage';

function FirstPage({ navigation }) {
  return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View style={styles.flexContainer}>
            <Image style={styles.logo} source = {require('../images/fake-logo.png')}></Image>
            <Text style={styles.title}>iPath</Text>
            <Text style={styles.italicSubheading}>Insert 1-2 sentence blurb here</Text>
            <Text style={styles.italicSubheading}>Click anywhere to continue</Text>
          </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    flex: 2,
  },
  logo: {
    alignContent: 'center',
    width: 150,
    height: 150,
    margin: 30
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    flex: 1.5,
  },
  flexContainer: {
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  }
});

export default FirstPage;