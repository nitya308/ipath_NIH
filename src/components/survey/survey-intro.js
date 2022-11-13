import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Clipboard from '../../assets/icons/clipboard';

function SurveyIntro(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.iconConatienr}>
          <Clipboard width={80} height={80} stroke={1} strokeColor="#5451F8" />
        </View>
        <Text style={styles.title}>PHQ-9</Text>
        <Text style={styles.subTitle}>Depression Screening Survey</Text>
        <Text style={styles.infoText}>Before  all users take this 9-question survey as a reliable way to determine whether you are displaying symptoms of depression. </Text>
        <Text style={styles.infoText}>There are many treatments and options to help, and we will walk you through these after the survey.</Text>
        <TouchableHighlight underlayColor="gray" style={styles.startButton} onPress={props.transition}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingVertical: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.06,
    width: windowWidth,
    height: windowHeight,
    flex: 0,
    alignItems: 'flex-start',
  },
  iconConatienr: {
    alignSelf: 'flex-end',
    marginVertical: 40
  },
  title: {
    fontSize: 30,
    padding: 10,
    fontFamily: 'Poppins-Regular',
  },
  subTitle: {
    fontSize: 40,
    lineHeight: 45,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  infoText: {
    padding: 10,
    lineHeight: 20,
    fontSize: 17,
    fontStyle: 'italic',
    fontFamily: 'Poppins-Italic',
  },
  startButton: {
    width: windowWidth * .85,
    marginTop: 100,
    height: 60,
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

export default SurveyIntro; 