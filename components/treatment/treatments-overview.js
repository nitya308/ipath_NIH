import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import UnorderedList from 'react-native-unordered-list';
import RightArrow from '../../assets/icons/right.svg';
import Speech from '../../assets/icons/speech.svg';
import Thermo from '../../assets/icons/thermo.svg';
import Watch from '../../assets/icons/watch.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsOverview(props){
    const [therapyModalVisible, setTherapyModalVisible] = useState(false);
    const [waitingModalVisible, setWaitingModalVisible] = useState(false);
    const [medicationModalVisible, setMedicationModalVisible] = useState(false);

    return(
        <View style={styles.options}>
            <Text style={styles.header}>Treatment Options</Text>
            <TouchableHighlight style={styles.option} onPress={() => setTherapyModalVisible(true)}>
                <View>
                    <Text style={styles.optionHeader}>Talk Therapy</Text>
                    <Text style={styles.optionText}>Weekly sessions working with a therapist. In person or remote format</Text>
                    <Speech style={styles.icon}/>
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={therapyModalVisible} transparent={true} onRequestClose={() => setTherapyModalVisible(!therapyModalVisible)}>
                <View style={styles.modalViewContainer}>
                    <Text style={styles.modalHeader}>Talk Therapy</Text>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalDescription}>Longer definition, blah blah blah blah watchful waiting involves not doing anything but monitoring symptoms, etc.</Text>
                        <Text style={styles.modalSubHeader}>Efficacy</Text>
                        <Text style={styles.modalDescription}>20% of cancer patients with depression claim to have noticed decreased symptoms over time with careful monitoring.</Text>
                        <Text style={styles.modalSubHeader}>Cost</Text>
                        <Text style={styles.modalDescription}>Free</Text>
                        <Text style={styles.modalSubHeader}>Accepts Insurance</Text>
                        <Text style={styles.modalDescription}>Yes</Text>
                        <Text style={styles.modalSubHeader}>Possible Side Effects</Text>
                        <UnorderedList style={{fontSize: 20}}>
                            <Text style={styles.modalDescription}>Increased symptoms of depression</Text>
                        </UnorderedList>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setTherapyModalVisible(!therapyModalVisible)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
            <TouchableHighlight style={styles.option} onPress={() => setWaitingModalVisible(true)}>
                <View>
                    <Text style={styles.optionHeader}>Watchful Waiting</Text>
                    <Text style={styles.optionText}>Monitor symptoms without direct action.</Text>
                    <Watch style={styles.icon}/>
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={waitingModalVisible} transparent={true} onRequestClose={() => settWaitingModalVisible(!waitingModalVisible)}>
                <View style={styles.modalViewContainer}>
                    <Text style={styles.modalHeader}>Watchful Waiting</Text>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Efficacy</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Cost</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Accepts Insurance</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Possible Side Effects</Text>
                        <UnorderedList style={{fontSize: 20}}>
                            <Text style={styles.modalDescription}></Text>
                        </UnorderedList>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setWaitingModalVisible(!waitingModalVisible)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
            <TouchableHighlight style={styles.option} onPress={() => setMedicationModalVisible(true)}>
                <View>
                    <Text style={styles.optionHeader}>Medication</Text>
                    <Text style={styles.optionText}>Specialist-prescribed anti-depressants.</Text>
                    <Thermo style={styles.icon} />
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={medicationModalVisible} transparent={true} onRequestClose={() => setMedicationModalVisible(!medicationModalVisible)}>
                <View style={styles.modalViewContainer}>
                    <Text style={styles.modalHeader}>Medication</Text>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Efficacy</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Cost</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Accepts Insurance</Text>
                        <Text style={styles.modalDescription}></Text>
                        <Text style={styles.modalSubHeader}>Possible Side Effects</Text>
                        <Text style={styles.modalDescription}></Text>
                        <UnorderedList style={{fontSize: 20}}>
                            <Text style={styles.modalDescription}></Text>
                        </UnorderedList>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setMedicationModalVisible(!medicationModalVisible)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
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
        backgroundColor: 'lightgray',
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
        marginTop: windowHeight * .1,
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