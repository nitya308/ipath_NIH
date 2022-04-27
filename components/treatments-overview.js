import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import RightArrow from '../assets/icons/right.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsOverview(props){
    return(
        <View style={styles.options}>
            <Text style={styles.header}>Treatment Options</Text>
            <View style={styles.option}>
                <Text style={styles.optionHeader}>Talk Therapy</Text>
                <Text style={styles.optionText}>A weekly 30-60 min session working with a therapist in person or on a computer: using a program on your own or with support from your clinician by email or phone.</Text>
            </View>
            <View style={styles.option}>
                <Text style={styles.optionHeader}>Watchful Waiting</Text>
                <Text style={styles.optionText}>You may visit your clinician more frequently to monitor your symptoms. + Compare options and discuss your lifestyle, current support and coping strategies.</Text>
            </View>
            <View style={styles.option}>
                <Text style={styles.optionHeader}>Medication</Text>
                <Text style={styles.optionText}>Selective Serotonin Reuptake Inhibitors (SSRIs) are medications that address symptoms by affecting your brain chemistry. These pills are usually taken once a day.</Text>
            </View>
            <TouchableHighlight style={styles.compareButton} onPress={props.scroll}>
                <View style={styles.compareButtonContainer}>
                    <Text style={styles.compareButtonText}>Compare Treatment Types</Text>
                    <RightArrow styles={styles.arrow} />
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        marginBottom: '2%',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    options:{
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
        width: windowWidth,
    },
    option:{
        height: '24%',
        width: '95%',
        margin: '2%',
        backgroundColor: 'skyblue',
        borderRadius: 10
    },
    optionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10
    },
    optionText: {
        fontSize: 19,
        paddingLeft: 10
    },
    compareButton: {
        width: '95%',
        height: '10%',
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
    compareButtonContainer: {
        width: '95%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    compareButtonText: {
        fontSize: 20,
    },
})
export default TreatmentsOverview