import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Clipboard from '../../assets/icons/clipboard';

function SurveyIntro(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.iconConatienr}>
          <Clipboard width={80} height={80} strokeColor="#5451F8" />
        </View>
        <Text style={styles.title}>PHQ-9</Text>
        <Text style={styles.subTitle}>Depression Screening Survey</Text>
        <Text style={styles.infoText}>This survey is 9 questions and is a reliable way to determine whether you are displaying symptoms of depression. There are lots of treatments and options to help. We will walk you through these after the survey.</Text>
      </View>
      <TouchableHighlight underlayColor="gray" style={styles.startButton} onPress={props.transition}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingTop: 50,
    paddingBottom: 50,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#373737',
  },
  iconConatienr: {
    alignSelf: 'flex-end',
    margin: 50
  },
  flexContainer: {
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 30
  },
  title: {
    fontSize: 30,
    padding: 10,
    color: 'white',
  },
  subTitle: {
    fontSize: 40,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  infoText: {
    marginTop: 30,
    padding: 10,
    fontSize: 17,
    color: 'white',
    fontStyle: 'italic',
  },
  startButton: {
    width: windowWidth * .85,
    marginTop: 100,
    height: 60,
    backgroundColor: '#51B5AF',
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
  }
});

export default SurveyIntro; 