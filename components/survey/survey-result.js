import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function SurveyResult(props){
    return(
        <View style={styles.container}>
            <Text style={styles.resultTitle}>Survey Results</Text>
            <Text style={styles.h1}>Based on your survey results, you are displaying symptoms of <Text style={{fontWeight: 'bold'}}>moderate depression</Text></Text>
            <Text style={styles.h2}>What does this mean?</Text>
            <Text style={styles.p}>Depression is more common than you might think. Around 20% of cancer patients display symptoms of depression</Text> 
            <TouchableHighlight style={styles.treatmentButton} onPress={props.press}>
                <Text style={styles.buttonText}>Treatment Options</Text> 
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
        width: 250,
        height: 60,
        backgroundColor: 'skyblue',
        flex: 0,
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})
export default SurveyResult