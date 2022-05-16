import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

function SurveyIntro(props){
    return(
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <Text style={styles.title}>PHQ-9</Text>
                <Text style={styles.subTitle}>Depression Screening Survey</Text>
                <Text style={styles.infoText}>A 9-item depression scale of the patient health questionnaire. The questions are based directly on the diagnostic criteria for major depressive disorder in the DSM-IV.</Text>
            </View>
            <TouchableHighlight underlayColor="gray" style={styles.startButton} onPress={props.transition}>
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
        // backgroundColor: '#373737',
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
        color: 'black',
    },
    subTitle:{
        fontSize: 30,
        padding: 10,
        color: 'black',
        width: 275,
        fontWeight: 'bold'
    },
    infoText:{
        marginTop: 30,
        padding: 10,
        fontSize: 17,
        color: 'black',
        fontStyle: 'italic',
    },
    startButton: {
        width: 300,
        height: 50,
        backgroundColor: '#51B5AF',
        borderRadius: 25,
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
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
        color: 'black',
        fontWeight: 'bold',
    }
});

export default SurveyIntro; 