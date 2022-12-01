import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/icons/logo.svg';
function WhatPage({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('WhyiPath')}>
      <View style={styles.flexContainer}>
        <Logo />
        <Text style={styles.title}>What is iPath?</Text>
        <View style={{ marginBottom: 35 }}>
          <Text style={styles.italicSubheading}>Going through cancer treatment is a difficult journey and people may experience feelings of depression.</Text>
          <Text style={styles.italicSubheading}>iPath connects people with cancer to trusted services and treatments for their depression symptoms.</Text>
        </View>
        <Text style={styles.italicSubheading}>tap anywhere to continue</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontFamily: 'Poppins-Italic',
    fontStyle: 'italic',
    fontSize: 17,
    paddingHorizontal: 20,
    textAlign: 'left',
  },
  logo: {
    alignContent: 'center',
    width: 150,
    height: 150,
    margin: 30,
    flex: 1.5
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#5451F8',
    marginTop: 20,
    paddingVertical: 20,
  },
  flexContainer: {
    paddingTop: 100,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FCFCFF',
  }
});

export default WhatPage;