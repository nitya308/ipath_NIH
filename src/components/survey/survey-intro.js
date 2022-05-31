import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function SurveyIntro(props){
    return(
        <View style={styles.container}>
            <View style={styles.flexContainer}>
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
const windowHeight= Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        paddingTop: 50,
        paddingBottom: 50,
        width: windowWidth,
        height: windowHeight * .8,
        backgroundColor: '#373737',
    }, 
    flexContainer:{
        flex: 0, 
        alignItems: 'flex-start',
        paddingLeft: 30
    },
    title:{
        fontSize: 50,
        marginTop: 50,
        padding: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle:{
        fontSize: 30,
        paddingLeft: 10,
        color: 'white',
        width: 275,
        fontWeight: 'bold'
    },
    infoText:{
        marginTop: 30,
        padding: 10,
        fontSize: 17,
        color: 'white',
        fontStyle: 'italic',
    },
    startButton: {
        width: windowWidth * .85,
        position: 'absolute',
        bottom: 100,
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