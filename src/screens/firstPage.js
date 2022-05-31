import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/icons/logo.svg';
function FirstPage({ navigation }) {
  return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View style={styles.flexContainer}>
            <Logo />
            {/* <Image style={styles.logo} source = {require('../images/fake-logo.png')}></Image> */}
            <Text style={styles.title}>iPath</Text>
            <Text style={styles.italicSubheading}>iPath is a decision aid tool funded by the National Cancer Institute. iPath aims to support cancer patients displaying symptoms of depression by helping them find the best treatment option.</Text>
            <Text style={styles.italicSubheading}>Click anywhere to continue</Text>
          </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontStyle: 'italic',
    fontSize: 17,
    paddingHorizontal: 20,
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
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#469C97',
    marginTop: 20,
    flex: 1.5,
  },
  flexContainer: {
    paddingTop: 100,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  }
});

export default FirstPage;