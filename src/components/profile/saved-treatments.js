import React from 'react';
import { useSelector } from 'react-redux';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import TreatmentItem from '../treatment/treatment-item';

function SavedTreatments(props){
    const savedTreatments = useSelector((state) => state.savedTreatments);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Saved Treatments</Text>
            {Array.from(savedTreatments.treatments)?.map((treatment) => {
                return (
                    <TreatmentItem treatment={treatment} />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: '100%',
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    },
})
export default SavedTreatments;