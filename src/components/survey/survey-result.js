import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';

function SurveyResult(props){

    const sc = props.scores;
    const totalScore = sc.reduce((sum, num) => sum + num, 0);

    var result = "";

    if (totalScore <=4) result = "no depression";
    else if (totalScore <= 9) result = "mild depression";
    else if (totalScore <= 14) result = "moderate depression";
    else if (totalScore <= 19) result = "moderate to severe depression";
    else if (totalScore <= 27) result = "severe depression";

    return(
        <View style={styles.container}>
            <Text style={styles.resultTitle}>Survey Results</Text>
            <Text style={styles.h1}>Based on your survey results, you are displaying symptoms of <Text style={{fontWeight: 'bold'}}>{result}</Text></Text>
            <Text style={styles.h2}>What does this mean?</Text>
            <Text style={styles.p}>Depression is more common than you might think. Around 20% of cancer patients display symptoms of depression</Text> 
            <TouchableHighlight style={styles.treatmentButton} onPress={props.press}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Explore Treatments</Text> 
                    <RightArrow />
                </View>
            </TouchableHighlight>
        </View>
    );
}
const windowHeight= Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
    },
    resultTitle: {
        paddingTop: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    h1: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    h2: {
        fontSize: 20,
        textAlign: 'center'
    }, 
    p: {
        marginTop: 200,
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    treatmentButton: {
        marginTop: 30,
        width: 350,
        height: 65,
        backgroundColor: '#469C97',
        borderRadius: 10,
        flex: 0,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '90%',
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})
export default SurveyResult