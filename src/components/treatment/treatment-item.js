import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Bookmark from '../../assets/icons/bookmark';
import CheckMark from '../../assets/icons/check.svg';
import MapPin from '../../assets/icons/mapPin.svg';

function TreatmentItem(props){
    const dispatch = useDispatch(); 
    const savedTreatments = useSelector((state) => state.savedTreatments);
    var tempSet = new Set(savedTreatments.treatments);
    return(
        <TouchableHighlight style={styles.treatmentContainer} onPress={props.press}>
            <View>
                <Text style={styles.treatmentName}>{props.treatment.name}  {"$".repeat(props.treatment.cost)}</Text>
                <View style={styles.treatmentTrait}>
                    <MapPin />
                    <Text style={styles.treatmentInfo}>{props.treatment.type}</Text>
                </View>
                <View style={styles.treatmentTrait}>
                    <CheckMark />
                    <Text style={styles.treatmentInfo}>{props.treatment.takesInsurance ? "Accepts Insurance" : "No Insurance"}</Text>
                </View>
                <View style={styles.treatmentTrait}>
                    <CheckMark />
                    <Text style={styles.treatmentInfo}>{props.treatment.quickAccess ? "Quick Access" : "No Quick Access"}</Text>
                </View>
                <View style={styles.bookmarkContainer}>
                    <Bookmark width="30" height="30" treatment={props.treatment} press={() =>  dispatch({type: "SAVE_TREATMENT", payload: props.treatment})}
                color={tempSet.has(props.treatment)? "black" : "none"}/>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    treatmentContainer:{
        height: 150,
        width: '95%',
        backgroundColor: '#E3EFF0',
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
})

export default TreatmentItem; 