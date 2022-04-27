import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';


const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentInfo(props){
    if(props.treatment){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>{props.treatment.name}</Text>
                <Text>Talk Therapy</Text>
                <Text>Medication</Text>
                <Text>Cost: {"$".repeat(props.treatment.cost)}</Text>
                <Text>{props.treatment.type}</Text>
                <Text>{props.treatment.takesInsurance ? "Takes Insurance" : "No Insurance"}</Text>
                <Text>{props.treatment.quickAccess ? "Quick Access" : "Not Quick Access"}</Text>
            </View>
        );
    } else {
        return <Text style={styles.container}>Loading...</Text>
    }
}
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
        width: windowWidth,
    },
})
export default TreatmentInfo