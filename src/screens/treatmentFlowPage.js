import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import Checkbox from '../components/checkbox';
import TreatmentsList from '../components/treatment/treatments-list';
import TreatmentInfo from '../components/treatment/treatment-info';
import Left from '../assets/icons/left.svg';
import Right from '../assets/icons/right.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;

function TreatmentFlowPage(props){
    const [scrollRef, setScrollRef] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);

    // Treatment type filters 
    const [therapyFilter, setTherapyFilter] = useState(false);
    const [medFilter, setMedFilter] = useState(false);
    const [waitingFilter, setWaitingFilter] = useState(false);

    // Treatment location filters
    const [personFilter, setPersonFilter] = useState(false);
    const [remoteFilter, setRemoteFilter] = useState(false);

    const [renderList, setRenderList] = useState(false);

    // Treatment sort options
    const [accessFilter, setAccessFilter] = useState(false);
    const [costFilter, setCostFilter] = useState(false);

    const [selectedTreatment, setSelectedTreatment] = useState(null);

    useEffect(() => {
        if(scrollRef){
            scrollRef.scrollTo({x: windowWidth * pageNumber})
        }
    }, [pageNumber])

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref={(ref) => {setScrollRef(ref)}}>
                <View style={styles.page}>
                    <Text style={styles.pageHeader}>Which treatment option(s) are you interested in?</Text>
                    <Text style={styles.pageSubheader}>Select all that apply.</Text>
                    <View style={styles.checkboxListContainer}>
                        <View style={styles.checkbox}>
                            <Checkbox  isChecked={therapyFilter} onPress={() => setTherapyFilter(!therapyFilter)} title="Talk Therapy" />
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={medFilter} onPress={() => setMedFilter(!medFilter)} title="Medication" />
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={waitingFilter} onPress={() => setWaitingFilter(!waitingFilter)} title="Watchful Waiting" />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor='gray' style={styles.nextButton} onPress={() => setPageNumber(pageNumber + 1)}>
                        <Right />
                    </TouchableHighlight>
                </View>
                <View style={styles.page}>
                    <Text style={styles.pageHeader}>Which locations option(s) are you interested in?</Text>
                    <Text style={styles.pageSubheader}>Select all that apply.</Text>
                    <View style={styles.checkboxListContainer}>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={personFilter} onPress={() => setPersonFilter(!personFilter)} title="In-Person" />
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={remoteFilter} onPress={() => setRemoteFilter(!remoteFilter)} title="Telehealth/Remote" />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor='gray' style={styles.backButton} onPress={() => setPageNumber(pageNumber - 1)}>
                        <Left />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='gray' style={styles.nextButton} onPress={() => setPageNumber(pageNumber + 1)}>
                        <Right />
                    </TouchableHighlight> 
                </View>
                <View style={styles.page}>
                    <Text style={styles.pageHeader}>How would you like to sort these treatment provider options?</Text>
                    <Text style={styles.pageSubheader}>Select one. Click for more info</Text>
                    <View style={styles.checkboxListContainer}>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={accessFilter} onPress={() => {setAccessFilter(!accessFilter); setCostFilter(false)}} title="Quick Access to Care" />
                        </View>
                        <View style={styles.checkbox}>
                            <Checkbox style={styles.checkbox} isChecked={costFilter} onPress={() => {setCostFilter(!costFilter); setAccessFilter(false)}} title="Lowest Cost" />
                        </View>
                    </View>
                    <TouchableHighlight underlayColor='gray' style={styles.backButton} onPress={() => setPageNumber(pageNumber - 1)}>
                        <Left />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='gray' style={styles.applyButton} onPress={() => {setPageNumber(pageNumber + 1); setRenderList(true)}}>
                        <Text style={{color: 'white'}}>Apply Filters</Text>
                    </TouchableHighlight>
                </View>
                {renderList ? <TreatmentsList press={() => {scrollRef.scrollToEnd()}} pickTreatment={setSelectedTreatment}
                therapy={therapyFilter}
                med={medFilter}
                waiting={waitingFilter}
                person={personFilter}
                remote={remoteFilter}
                access={accessFilter}
                cost={costFilter} />
                : 
                null
                }
                <TreatmentInfo treatment={selectedTreatment} press={() => scrollRef.scrollTo({x: windowWidth * 3})} />
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
    }, 
    page:{
        width: windowWidth,
        height: windowHeight * .8,
        alignItems: 'center',
    },
    pageHeader:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 30,
        paddingHorizontal: 20
    },
    pageSubheader:{
        fontStyle: 'italic', 
        color: 'gray',
        fontSize: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 40,
    },
    checkboxListContainer:{
        width: '80%',
    },  
    checkbox:{
        marginTop: 30,
        alignSelf: 'flex-start',
    },  
    backButton:{
        position: 'absolute',
        backgroundColor: '#469C97',
        height: 50,
        width: 50,
        bottom: 50,
        left: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#469C97",
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyButton: {
        position: 'absolute',
        width: 120,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#469C97",
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TreatmentFlowPage;