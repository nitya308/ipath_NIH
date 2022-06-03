import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function surveyQuestion(props){    
    return (
    <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{props.questionTitle}</Text>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set(0);props.press(); }}>
            <View style={[styles.answer, props.selAns ==0 ? styles.selectedAnswer: null]}>
                <Text style={[styles.answerText, props.selAns == 0 ? styles.selectedAnswerText: null]}>Not at all</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set(1);props.press(); }}>
            <View style={[styles.answer, props.selAns ==1 ? styles.selectedAnswer: null]}>
                <Text style={[styles.answerText, props.selAns == 1 ? styles.selectedAnswerText: null]}>Several days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set(2);props.press(); }}>
            <View style={[styles.answer, props.selAns ==2 ? styles.selectedAnswer: null]}>
                <Text style={[styles.answerText, props.selAns == 2 ? styles.selectedAnswerText: null]}>More than half of days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set(3);props.press();}}>
            <View style={[styles.answer, props.selAns ==3 ? styles.selectedAnswer: null]}>
                <Text style={[styles.answerText, props.selAns == 3 ? styles.selectedAnswerText: null]}>Nearly every day</Text>
            </View>
        </TouchableHighlight>
    </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    questionContainer: {
        marginTop: 0,
        flex: 1,
        width: windowWidth * 2,
        backgroundColor: 'white',
    },
    questionText: {
        fontSize: 18,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: "50%",
        textAlign: 'center',
        marginRight: windowWidth * .25,
    },
    touchContainer: {
        height: windowHeight * .08, 
        width: windowWidth * .75,
        borderRadius: 30,
        margin: 8,
        marginLeft: windowWidth * .125,
    }, 
    answer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#E1F0F1',
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
      backgroundColor: '#469C97',
    },
    answerText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20
    },
    selectedAnswerText:{
        color: '#FFFFFF',
    }
});

export default surveyQuestion;