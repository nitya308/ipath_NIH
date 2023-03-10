import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/icons/logo.svg';
function WhyPage({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('HowiPath')}>
      <View style={styles.flexContainer}>
        <Logo />
        <Text style={styles.title}>Why iPath?</Text>
        <View style={{ marginBottom: 35 }}>
          <Text style={styles.italicSubheading}>iPath has been developed with patients from St. Johnsbury, clinicians and researchers at Dartmouth College. We have identified local and online services that can help with symptoms ofdepression, some of which are available at no or low cost.</Text>
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

export default WhyPage;