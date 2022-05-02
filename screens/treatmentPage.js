import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import TreatmentsOverview from '../components/treatment/treatments-overview';
import TreatmentsComparison from '../components/treatment/treatments-comparison';
import TreatmentsList from '../components/treatment/treatments-list';
import TreatmentInfo from '../components/treatment/treatment-info';
import TreatmentsFilter from '../components/treatment/treatments-filter';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;

function TreatmentPage(props){
    const [scrollRef, setScrollRef] = useState(null);
    const [selectedTreatment, setSelectedTreatment] = useState(null)
    const [pageNumber, setPageNumber] = useState(0);

    const setTreatment = (treatment) => {
        setSelectedTreatment(treatment)
    }
    const scrollRight = () => {
        setPageNumber(pageNumber + 1)
        scrollRef.scrollTo({x: windowWidth * pageNumber})
    }
    useEffect(() => {
        if(scrollRef){
            scrollRef.scrollTo({x: windowWidth * pageNumber})
        }
    }, [pageNumber])
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} pagingEnabled={true} scrolledEnabled={false} ref={(ref) => {setScrollRef(ref)}}>
                <TreatmentsOverview scroll={scrollRight}/>
                <TreatmentsComparison scroll={scrollRight}/>
                <TreatmentsFilter scroll={scrollRight}/>
                <TreatmentsList selectTreatment={setTreatment} scroll={scrollRight}/>
                <TreatmentInfo treatment={selectedTreatment}/>
                <View></View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: windowHeight, 
        margin: 0,
        padding: 0,
    }, 
    button: {
        height: 150,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        margin: 8,
    },
    buttonContent: {
        textAlign: 'center',
        padding: 15,
        paddingTop: 20,
        fontSize: 20
    }
});

export default TreatmentPage;