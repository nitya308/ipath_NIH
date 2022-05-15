import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function surveyQuestion(props){    
    return (
    <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{props.questionTitle}</Text>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set0();props.press(); }}>
            <View style={[styles.answer, props.selAns ==0 ? styles.selectedAnswer: null]}>
                <Text style={styles.answerText}>Not at all</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set1();props.press(); }}>
            <View style={[styles.answer, props.selAns ==1 ? styles.selectedAnswer: null]}>
                <Text style={styles.answerText}>Several days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set2();props.press(); }}>
            <View style={[styles.answer, props.selAns ==2 ? styles.selectedAnswer: null]}>
                <Text style={styles.answerText}>More than half of days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={()=> {props.set3();props.press();}}>
            <View style={[styles.answer, props.selAns ==3 ? styles.selectedAnswer: null]}>
                <Text style={styles.answerText}>Nearly every day</Text>
            </View>
        </TouchableHighlight>
    </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    questionContainer: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        width: windowWidth,
        backgroundColor: 'white',
    },
    questionText: {
        fontSize: 18,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    touchContainer: {
        height: 60, 
        width: 300,
        borderRadius: 30,
        margin: 8
    }, 
    answer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#E1F0F1',
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
});

export default surveyQuestion;