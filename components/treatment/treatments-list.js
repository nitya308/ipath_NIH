import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Pressable, Modal} from 'react-native';
import CheckMark from '../../assets/icons/check.svg';
import MapPin from '../../assets/icons/mapPin.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import Filter from '../../assets/icons/filter.svg';
import Checkbox from '../checkbox';
import TreatmentInfo from './treatment-info';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsList(props){
    const [therapyFilter, setTherapyFilter] = useState(false);
    const [medFilter, setMedFilter] = useState(false);
    const [comboFilter, setComboFilter] = useState(false);
    const [waitFilter, setWaitFilter] = useState(false);

    const [filterModal, setFilterModal] = useState(false);

    const [scrollRef, setScrollRef] = useState(null);

    const[selectedTreatment, setSelectedTreatment] = useState(null);

    const checkFilters = (treatment) => {
        if(therapyFilter && treatment.category === "Talk Therapy"){
            return true;
        }
        if(medFilter && treatment.category === "Medication"){
            return true;
        }
        if(waitFilter && treatment.category === "Watchful Waiting"){
            return true;
        }
        if(!waitFilter && !medFilter && !comboFilter && !therapyFilter){
            return true;
        }
        return false;
    }
    return(
        <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={true} ref={(ref) => {setScrollRef(ref)}}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Connect to Treatments</Text>
                <Pressable onPress={() => setFilterModal(true)}style={styles.filterContainer}>
                    <Filter />
                    <Text style={styles.filterText}>Filter</Text>
                </Pressable>
                <View style={styles.list}>
                    {treatmentData.filter((treat) => checkFilters(treat)).map((treatment) => {
                        return (
                            <TouchableHighlight key={treatment} style={styles.treatmentContainer} onPress={() => {
                                setSelectedTreatment(treatment);
                                scrollRef.scrollToEnd();
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
            <TreatmentInfo treatment={selectedTreatment}/>
            <Modal visible={filterModal} transparent={true} onRequestClose={() => setFilterModal(!filterModal)}>
                <View style={styles.modalViewContainer}>
                    <Text style={styles.modalHeader}>Filter Treatments</Text>
                    <Text style={styles.modalSubHeader}>I'm interested in...</Text>
                    <View style={styles.checkboxContainerOne}>
                        <Checkbox title="Talk Therapy" isChecked={therapyFilter} onPress={() => setTherapyFilter(!therapyFilter)} />
                        <Checkbox title="Medication" isChecked={medFilter} onPress={() => setMedFilter(!medFilter)}/>
                        <Checkbox title="Therapy & Medication" isChecked={comboFilter} onPress={() => setComboFilter(!comboFilter)}/>
                        <Checkbox title="Watchful Waiting" isChecked={waitFilter} onPress={() => setWaitFilter(!waitFilter)}/>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setFilterModal(!filterModal)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
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
        margin: 0,
        padding: 0,
        paddingTop: '1%',
    },
    filterContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 15
    },
    filterText:{
        fontSize: 20,
        marginLeft: 10
    },
    list: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 200,
    },
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
    bookmark: {
        height: 50,
        width: 50,
    },
    modalViewContainer:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        alignSelf: 'center',
        width: 340,
        height: 450,
        marginTop: windowHeight * .1,
        marginBottom: windowHeight * .1,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalContainer: {
        width: '100%',
        paddingLeft: 30
    },
    modalHeader:{
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalDescription:{
        fontSize: 20
    },
    modalSubHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },  
    checkboxContainerOne:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
    },
    closeModal: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeModalIcon:{
        fontSize: 25
    },
})

const treatmentData = [
    {
        name: "Treatment 1",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 2,
        category: "Medication"
    },
    {
        name: "Treatment 2",
        type: "In-Person",
        takesInsurance: true,
        quickAccess: true,
        cost: 1,
        category: "Watchful Waiting"
    },
    {
        name: "Treatment 3",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: false,
        cost: 3,
        category: "Talk Therapy"
    },
    {
        name: "Treatment 4",
        type: "Telehealth",
        takesInsurance: false,
        quickAccess: true,
        cost: 2,
        category: "Medication"
    },
    {
        name: "Treatment 5",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 3,
        category: "Talk Therapy"
    },
    {
        name: "Treatment",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 2,
        category: "Medication"
    },
    {
        name: "Treatment",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 1,
        category: "Medication"
    },
    {
        name: "Treatment Woohoo",
        type: "In-Person",
        takesInsurance: false,
        quickAccess: true,
        cost: 1,
        category: "Medication"
    },
]
export default TreatmentsList