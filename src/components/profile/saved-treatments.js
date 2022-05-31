import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import TreatmentItem from '../treatment/treatment-item';
import TreatmentInfo from '../treatment/treatment-info';

function SavedTreatments(props){
    const [scrollRef, setScrollRef] = useState(null);
    const [selectedTreatment, setSelectedTreatment] = useState(null)
    const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
    const allTreatments = useSelector((state) => state.treatments.allTreatments);
    return(
        <ScrollView horizontal={true} pagingEnabled={true} ref={(ref) => {setScrollRef(ref)}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Saved Treatments</Text>
                <View style={styles.list}>
                    {allTreatments.filter((treat) => savedTreatments.includes(treat.id)).map((treatment) => {
                        return (
                            <TreatmentItem key={treatment.id} treatment={treatment} press={() => {
                                setSelectedTreatment(treatment);
                                scrollRef.scrollToEnd();
                            }}/>
                        )
                    })}
                </View>
            </ScrollView>
            <TreatmentInfo treatment={selectedTreatment} press={() => scrollRef.scrollTo({x: 0})}/>
        </ScrollView>
    )
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: windowWidth,
        marginTop: 5,
    },
    title: {
        fontSize: 30,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    },
    list: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 50,
        width: '100%',
    },
})
export default SavedTreatments;