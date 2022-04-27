import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView} from 'react-native';
import CheckMark from '../assets/icons/check.svg';
import MapPin from '../assets/icons/mapPin.svg';
import Bookmark from '../assets/icons/bookmark.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsList(props){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Connect to Treatments</Text>
            <View style={styles.list}>
                {treatmentData.map((treatment) => {
                    return (
                        <TouchableHighlight style={styles.treatmentContainer} onPress={() => {
                            props.selectTreatment(treatment);
                            props.scroll();
                        }}>
                            <View>
                                <Text style={styles.treatmentName}>{treatment.name}  {"$".repeat(treatment.cost)}</Text>
                                <View style={styles.treatmentTrait}>
                                    <MapPin />
                                    <Text style={styles.treatmentInfo}>{treatment.type}</Text>
                                </View>
                                <View style={styles.treatmentTrait}>
                                    <CheckMark />
                                    <Text style={styles.treatmentInfo}>{treatment.takesInsurance ? "Accepts Insurance" : "No Insurance"}</Text>
                                </View>
                                <View style={styles.treatmentTrait}>
                                    <CheckMark />
                                    <Text style={styles.treatmentInfo}>{treatment.quickAccess ? "Quick Access" : "No Quick Access"}</Text>
                                </View>
                                <TouchableHighlight style={styles.bookmarkContainer}>
                                    <Bookmark />
                                </TouchableHighlight>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        width: windowWidth,
    },
    list: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 200,
    },
    treatmentContainer:{
        height: 150,
        width: '95%',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginTop: '2%',
    },
    treatmentName: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 10
    },
    treatmentTrait: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    treatmentInfo: {
        paddingLeft: 10
    },
    bookmarkContainer:{
        position: 'absolute',
        top: 15,
        right: 15,
    },
    bookmark: {
        height: 50,
        width: 50,
    }
})

const treatmentData = [
    {
        name: "Treatment 1",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 2
    },
    {
        name: "Treatment 2",
        type: "In-Person",
        takesInsurance: true,
        quickAccess: true,
        cost: 1
    },
    {
        name: "Treatment 3",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: false,
        cost: 3
    },
    {
        name: "Treatment 4",
        type: "Telehealth",
        takesInsurance: false,
        quickAccess: true,
        cost: 2
    },
    {
        name: "Treatment 5",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 3
    },
    {
        name: "Treatment",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 2
    },
    {
        name: "Treatment",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 1
    },
    {
        name: "Treatment Woohoo",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 1
    },
]
export default TreatmentsList