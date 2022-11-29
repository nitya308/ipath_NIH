import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function surveyQuestion(props) {
  const renderBackButton = () => {
    return (
      <TouchableHighlight underlayColor="gray" style={styles.backButton} onPress={props.backpress}>
        <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '90%' }}>
          <Text style={styles.backText}>BACK</Text>
        </View>
      </TouchableHighlight>
    )
  };

  return (
    <View style={styles.questionContainer}>
      <Text style={windowHeight < 670 ? styles.questionTextSS: styles.questionText}>{props.questionTitle}</Text>
      <TouchableHighlight style={windowHeight < 670 ? styles.touchContainerSS : styles.touchContainer} underlayColor='gray' onPress={() => { props.set(0); props.press(); }}>
        <View style={[styles.answer, props.selAns == 0 ? styles.selectedAnswer : null]}>
          <Text style={windowHeight < 670 ? [styles.answerTextSS, props.selAns == 0 ? styles.selectedAnswerText : null] : [styles.answerText, props.selAns == 0 ? styles.selectedAnswerText : null]}>Not at all</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={windowHeight < 670 ? styles.touchContainerSS : styles.touchContainer} underlayColor='gray' onPress={() => { props.set(1); props.press(); }}>
        <View style={[styles.answer, props.selAns == 1 ? styles.selectedAnswer : null]}>
          <Text style={windowHeight < 670 ? [styles.answerTextSS, props.selAns == 1 ? styles.selectedAnswerText : null] : [styles.answerText, props.selAns == 1 ? styles.selectedAnswerText : null]}>Several days</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={windowHeight < 670 ? styles.touchContainerSS : styles.touchContainer} underlayColor='gray' onPress={() => { props.set(2); props.press(); }}>
        <View style={[styles.answer, props.selAns == 2 ? styles.selectedAnswer : null]}>
          <Text style={windowHeight < 670 ? [styles.answerTextSS, props.selAns == 2 ? styles.selectedAnswerText : null] : [styles.answerText, props.selAns == 2 ? styles.selectedAnswerText : null]}>More than half of days</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={windowHeight < 670 ? styles.touchContainerSS : styles.touchContainer} underlayColor='gray' onPress={() => { props.set(3); props.press(); }}>
        <View style={[styles.answer, props.selAns == 3 ? styles.selectedAnswer : null]}>
          <Text style={windowHeight < 670 ? [styles.answerTextSS, props.selAns == 3 ? styles.selectedAnswerText : null] : [styles.answerText, props.selAns == 3 ? styles.selectedAnswerText : null]}>Nearly every day</Text>
        </View>
      </TouchableHighlight>
      {renderBackButton()}
      {props.nextbutton}
    </View>
  );
}


const styles = StyleSheet.create({
  questionContainer: {
    height: windowHeight * 0.65,
    padding: 10,
    margin: 20,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  questionText: {
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
  questionTextSS: {
    fontSize: 15,
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
  },
  touchContainer: {
    height: windowHeight * .08,
    width: windowWidth * .75,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 10
  },
  touchContainerSS: {
    height: windowHeight * .08,
    width: windowWidth * .75,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 5,
  },
  answer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#5451F8',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  selectedAnswer: {
    color: '#FFFFFF',
    backgroundColor: '#171578',
  },
  answerText: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: 'Poppins-Bold'
  },
  answerTextSS: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: 'Poppins-Bold'
  },
  selectedAnswerText: {
    color: '#FFFFFF',
  },
  backButton: {
    width: 100,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  backText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    color: 'black',
    fontSize: 20
  },
});

export default surveyQuestion;