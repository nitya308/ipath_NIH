import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function surveyQuestion(props){    
    return (
    <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{props.questionTitle}</Text>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={props.press}>
            <View style={styles.answer}>
                <Text style={styles.answerText}>Not at all</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={props.press}>
            <View style={styles.answer}>
                <Text style={styles.answerText}>Several days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={props.press}>
            <View style={styles.answer}>
                <Text style={styles.answerText}>More than half of days</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={props.press}>
            <View style={styles.answer}>
                <Text style={styles.answerText}>Nearly every day</Text>
            </View>
        </TouchableHighlight>
    </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    questionContainer: {
        // backgroundColor: 'lightgray',
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        width: windowWidth,
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
        borderRadius: 10,
        margin: 8
    }, 
    answer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgb(26,177,147)',
    }, 
    answerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 15,
        fontSize: 20
    },
});

export default surveyQuestion;