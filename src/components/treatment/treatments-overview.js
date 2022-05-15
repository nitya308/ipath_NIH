import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable, ScrollView } from 'react-native';
import UnorderedList from 'react-native-unordered-list';
import RightArrow from '../../assets/icons/right.svg';
import Speech from '../../assets/icons/speech.svg';
import Thermo from '../../assets/icons/thermo.svg';
import Watch from '../../assets/icons/watch.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
const treatmentData = {
    "Talk Therapy": {
        description: "A weekly 30-60 minute session working with a therapist either in person or on a computer: using a program on your own or with support from your clinician by email or phone.",
        efficacy: "In addition to the 23 out of 100 people that recover without treatment, another 14 out of 100 will recover in 2 months using talk therapy. In addition to the 23 people who recover without treatment, another 26 in 100 people recover with a combination of SSRIs and talk therapy.",
        cost: "cost",
        sideEffects: "possible side effects",
    },
    "Medication": {
        description: "Selective Serotonin Reuptake Inhibitors (SSRIs) are medications that address symptoms by affecting your brain chemistry. These pills are usually taken once per day.",
        efficacy: "this will work",
        cost: "cost",
        sideEffects: "possible side effects",
    },
    "Watchful Waiting": {
        description: "You may visit your clinician more frequently to monitor your symptoms and compare options to discuss your lifestyle, current support and coping strategies.",
        efficacy: "this will work",
        cost: "cost",
        sideEffects: "possible side effects",
    }
};
function TreatmentsOverview(props){
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedType, setSelectedType] = useState("Watchful Waiting");
    return(
        <View style={styles.options}>
            <Text style={styles.header}>Treatment Options</Text>
            <TouchableHighlight style={styles.option} onPress={() => {setSelectedType("Talk Therapy"); setModalVisible(true)}}>
                <View>
                    <Text style={styles.optionHeader}>Talk Therapy</Text>
                    <Text style={styles.optionText}>Weekly sessions working with a therapist. In person or remote format</Text>
                    <Speech style={styles.icon}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.option} onPress={() => {setSelectedType("Watchful Waiting"); setModalVisible(true)}}>
                <View>
                    <Text style={styles.optionHeader}>Watchful Waiting</Text>
                    <Text style={styles.optionText}>Monitor symptoms without direct action.</Text>
                    <Watch style={styles.icon}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.option} onPress={() => {setSelectedType("Medication"); setModalVisible(true)}}>
                <View>
                    <Text style={styles.optionHeader}>Medication</Text>
                    <Text style={styles.optionText}>Specialist-prescribed anti-depressants.</Text>
                    <Thermo style={styles.icon} />
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>{selectedType}</Text>
                    </View>
                    <ScrollView style={styles.modalContainer}>
                        <Text style={styles.modalDescription}>{treatmentData[selectedType].description}</Text>
                        <View style={styles.line} />
                        <Text style={styles.modalSubHeader}>Will this work?</Text>
                        <Text style={styles.modalDescription}>{treatmentData[selectedType].efficacy}</Text>
                        <View style={styles.line} />
                        <Text style={styles.modalSubHeader}>Cost</Text>
                        <Text style={styles.modalDescription}>{treatmentData[selectedType].cost}</Text>
                        <View style={styles.line} />
                        <Text style={styles.modalSubHeader}>Possible Side Effects</Text>
                        <Text style={styles.modalDescription}>{treatmentData[selectedType].sideEffects}</Text>
                    </ScrollView>
                    <Pressable style={styles.closeModal} onPress={() => {setModalVisible(!modalVisible)}}>
                        <Text style={styles.closeModalIcon}>x</Text>
                    </Pressable>
                </View>
            </Modal>
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
        backgroundColor: '#E3EFF0',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    optionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 15
    },
    optionText: {
        fontSize: 19,
        paddingLeft: 15,
        marginTop: 50,
        fontStyle: 'italic',
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    modalViewContainer:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: windowWidth,
        marginTop: windowHeight * .05,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
        paddingLeft: 30,
        marginTop: 20
    },
    modalHeaderContainer:{
        flex:0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '100%',
        backgroundColor: "#E3EFF0",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    line:{
        height: 2,
        width: '95%',
        backgroundColor: '#469C97',
        marginTop: 20,
        marginBottom: 20
    },
    modalHeader:{
        padding: 35,
        marginBottom: 20,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        width: "100%",
    },
    modalDescription:{
        fontSize: 20,
    },
    modalSubHeader:{
        fontSize: 20,
        fontWeight: 'bold',
    },  
    closeModal: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeModalIcon:{
        fontSize: 25
    },
    compareButton: {
        width: '95%',
        height: '10%',
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: '#469C97',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
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
        color: 'white',
        fontWeight: 'bold',
    },
})
export default TreatmentsOverview