import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Chart from '../assets/icons/chart.svg';
import {getUserDoc, updateFavTreatment, deleteFavTreatment, getUserSurveyRes, addSurveyRes, getTreatments, addClick} from '../services/datastore';


function HomePage(props){
    const navigateTo = (name) => {
        props.navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to iPath</Text>
            <Text style={styles.description}>iPath is a decision aid tool funded by the NCI. iPath aims to support cancer patients displaying symptoms of depression by helping them find the best treatment option for them.</Text>
            <View style={styles.flexContainer}>
                <TouchableHighlight style={styles.surveyTouchContainer} underlayColor='gray' onPress={() => navigateTo("Survey")}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>Take PHQ-9 Depression Screening Survey</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.parallelButtons}>
                    <TouchableHighlight style={styles.mediumTouchContainer} underlayColor='gray' onPress={() => navigateTo("History")}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTitle}>View My History</Text>
                            <Chart style={styles.chart}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.mediumTouchContainer} underlayColor='gray' onPress={() => navigateTo("Learn")}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTitle}>Explore Treatments</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.additionalTouchContainer} underlayColor='gray' onPress={() => navigateTo("")}>
                    <Text style={styles.buttonTitle}>View Additional Resources</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    description: {
        fontStyle: 'italic',
        fontSize: 18,
        padding: 15
    },
    flexContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 20,
        width: windowWidth * .8
    },
    parallelButtons:{
      flex: 0,
      width: '100%',
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    surveyTouchContainer:{
        width: '100%',
        backgroundColor: '#469C97',
        height: 130,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    mediumTouchContainer:{
        width: 145.06,
        backgroundColor: '#469C97',
        height: 130,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    additionalTouchContainer:{
        flex: 0,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#469C97',
        height: 65,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonContainer:{
      width: '95%'
    },
    chart:{
        position: 'absolute',
        top: 70,
        left: -20,
    },
    buttonTitle: {
        fontSize: 20,
        color: 'white',
        padding: 15
    },
});

export default HomePage;