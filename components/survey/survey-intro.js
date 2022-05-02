import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function SurveyIntro(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>PHQ-9</Text>
            <Text style={styles.subTitle}>Depression Screening Survey</Text>
            <Text style={styles.infoText}>A 9-item depression scale of the patient health questionnaire. The questions are based directly on the diagnostic criteria for major depressive disorder in the DSM-IV.</Text>
            <TouchableHighlight style={styles.startButton} onPress={props.transition}>
                <Text style={styles.buttonText}>Begin Survey</Text>
            </TouchableHighlight>
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        paddingTop: 50,
        paddingBottom: 50,
        width: windowWidth,
        height: windowHeight * .8,
        flex: 1,
        alignItems: 'center',
    }, 
    title:{
        fontSize: 50,
        marginTop: 50,
        padding: 10
    },
    subTitle:{
        fontSize: 30,
        padding: 10
    },
    infoText:{
        textAlign: 'center',
        marginTop: 50,
        padding: 10,
        fontSize: 20
    },
    startButton: {
        width: 200,
        height: 60,
        backgroundColor: 'skyblue',
        marginTop: 20,
        borderRadius: 10,
        flex: 0,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
    }
});

export default SurveyIntro; 