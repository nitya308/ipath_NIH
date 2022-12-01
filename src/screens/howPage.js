import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Logo from '../assets/icons/logo.svg';
function HowPage({ navigation }) {
  return (

    <View style={styles.flexContainer}>
      <Text style={styles.title}>How does this work?</Text>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.italicSubheading}>It works in 3 easy steps.
        </Text>
        <Text style={styles.italicSubheading}>1. You will complete 9 questions to assess your depression symptoms.
        </Text>
        <Text style={styles.italicSubheading}>2. You will then learn about different ways that patients with cancer or recovering from cancer can tackle depression symptoms.
        </Text>
        <Text style={styles.italicSubheading}>3. Finally you can connect to a service or treatment that best fits with you what is most important to you.
        </Text>
      </View>
      <TouchableHighlight style={styles.startButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Get Started!</Text>
      </TouchableHighlight>
    </View>

  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontFamily: 'Poppins-Italic',
    fontStyle: 'italic',
    fontSize: 17,
    paddingHorizontal: 20,
    textAlign: 'left',
    paddingVertical: 10,
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
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#5451F8',
    marginTop: 20,
    paddingVertical: 25,
  },
  flexContainer: {
    paddingTop: 100,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FCFCFF',
  },
  startButton: {
    height: 60,
    width: 350,
    backgroundColor: "#5451F8",
    borderRadius: 30,
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 17,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  }
});

export default HowPage;