import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/icons/logo.svg';
function HowPage({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
      <View style={styles.flexContainer}>
        {/* <Image style={styles.logo} source = {require('../images/fake-logo.png')}></Image> */}
        <Text style={styles.title}>How does this work?</Text>
        <Text style={styles.italicSubheading}>It works in 3 easy steps.
        </Text>
        <Text style={styles.italicSubheading}>1. You will complete 9 questions to assess your depression symptoms.
        </Text>
        <Text style={styles.italicSubheading}>2. You will then learn about different ways that patients with cancer or recovering from cancer can tackle depression symptoms.
        </Text>
        <Text style={styles.italicSubheading}>3. Finally you can connect to a service or treatment that best fits with you what is most important to you.

        </Text>
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
    flexWrap: 'wrap',
  },
  logo: {
    alignContent: 'center',
    width: 150,
    height: 150,
    margin: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5451F8',
    marginTop: 20,
    flex: 1.5,
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

export default HowPage;