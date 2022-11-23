import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Back from '../../assets/icons/BackCircle.svg';
import Infographic from '../../assets/icons/infographic';
import QuestionMark from '../../assets/icons/questionMark.svg';
import { collectManifestSchemes, openURL } from 'expo-linking';
import { back } from 'react-native/Libraries/Animated/Easing';
import ResultModalIcon from '../../assets/icons/resultModalIcon.svg'
import ResultIcon from '../../assets/icons/ResultsIcon.svg'



function SurveyResult(props) {
    const [modalVisible, setModalVisible] = useState('false');
    const sc = props.scores;
    const totalScore = sc.reduce((sum, num) => sum + num, 0);

    var result = "";

    if (totalScore <= 4) result = "No Depression";
    else if (totalScore <= 9) result = "Mild Depression";
    else if (totalScore <= 14) result = "Moderate Depression";
    else if (totalScore <= 19) result = "Moderate to Severe Depression";
    else if (totalScore <= 27) result = "Severe Depression";

    const renderHotlinePopup = () => {
        if (props.hotline) {
            return (
                <View style={styles.hotlineContainer}>
                    <Text style={styles.hotlineText}>Your responses indicate that you may benefit from immediate assistance. Please call the National Suicide Prevention Hotline at</Text>
                    <Text style={styles.link} onPress={() => { openURL('tel:1-800-273-TALK') }}> 1-800-273-TALK </Text>
                </View>
            );
        }
        else { return null; }
    };

    return (
        <View style={styles.container}>
            <View style={styles.resultHeaderContainer}>
                <Text style={styles.resultTitle}>Survey Results</Text>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.h1}>Based on your survey results, you are displaying symptoms of </Text>
                <Text style={styles.individualResult}>{result}</Text>
            </View>
            <TouchableHighlight underlayColor="gray" style={styles.infoContainer} onPress={() => setModalVisible(true)}>
                <View style={styles.infoContainerContent}>
                    <Text style={styles.h2}>What does this mean?</Text>
                    <QuestionMark />
                </View>
            </TouchableHighlight>
            {renderHotlinePopup()}
            {props.hotline ?
                <View style={styles.hotlineResultsPage}>
                    <Text style={styles.pHotlineResultsPage}>Depression is more common than you might think. Around 1 in 4 patients with cancer display symptoms of depression.</Text>
                    <ResultIcon width={150} height={109.22} />
                </View> :
                <View style={styles.noHotlineResultsPage}>
                    <Text style={styles.p}>Depression is more common than you might think. Around 1 in 4 patients with cancer display symptoms of depression.</Text>
                    <ResultIcon width={227} height={109.22} />
                </View>
            }
            <TouchableHighlight underlayColor='gray' style={styles.treatmentButton} onPress={props.press}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Learn About Treatments</Text>
                    <RightArrow />
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>What does this mean?</Text>
                        <Text style={styles.modalDescription}>Depression symptoms are grouped into the following categories based on points assigned to PHQ-9 responses:</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <View style={styles.scoreHeader}>
                            <Text style={styles.scoreNumber}>Where am I?</Text>
                            <Text style={styles.scoreLevel}>Severity Level</Text>
                        </View>
                        <View style={result === "No Depression" ? styles.transparentThickLine : styles.thickLine} />
                        <View style={[styles.scoreContainer, result === "No Depression" ? styles.selectedRange : null]}>
                            {result === "No Depression" ? <ResultModalIcon style={styles.homeicon}></ResultModalIcon> : <View />}
                            <Text style={result === "No Depression" ? styles.scoreLevelSelected : styles.scoreLevel}>Minimal Depression</Text>

                        </View>
                        <View style={result === "No Depression" || result === "Mild Depression" ? styles.transparentLine : styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result === "Mild Depression" ? styles.selectedRange : null]}>
                            {result === "Mild Depression" ? <ResultModalIcon style={styles.homeicon}></ResultModalIcon> : <View />}
                            <Text style={styles.scoreLevel}>Mild Depression</Text>
                        </View>
                        <View style={result === "Moderate Depression" || result === "Mild Depression" ? styles.transparentLine : styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result === "Moderate Depression" ? styles.selectedRange : null]}>
                            {result === "Moderate Depression" ? <ResultModalIcon style={styles.homeicon}></ResultModalIcon> : <View />}
                            <Text style={styles.scoreLevel}>Moderate Depression</Text>
                        </View>
                        <View style={result === "Moderate Depression" || result === "Moderate to Severe Depression" ? styles.transparentLine : styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result === "Moderate to Severe Depression" ? styles.selectedRange : null]}>
                            {result === "Moderate to Severe Depression" ? <ResultModalIcon style={styles.homeicon}></ResultModalIcon> : <View />}
                            <Text style={styles.scoreLevel}>Moderately Severe Depression</Text>
                        </View>
                        <View style={result === "Severe Depression" || result === "Moderate to Severe Depression" ? styles.transparentLine : styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result === "Severe Depression" ? styles.selectedRange : null]}>
                            {result === "Severe Depression" ? <ResultModalIcon style={styles.homeicon}></ResultModalIcon> : <View />}
                            <Text style={styles.scoreLevel}>Severe Depression</Text>
                        </View>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => { setModalVisible(!modalVisible) }}>
                        {/* <Text style={styles.closeModalIcon}>X</Text> */}
                        <Back width={40} height={40} />
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
    },
    resultHeaderContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        paddingLeft: 20
    },
    hotlineContainer: {
        borderColor: '#5451F8',
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    hotlineText: {
        fontSize: 17,
        fontStyle: 'italic',
        color: '#545454',
    },
    link: {
        color: '#0000EE',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 17,
    },
    resultTitle: {
        paddingTop: 0,
        marginLeft: 20,
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        color: '#373737'
    },
    h1: {
        padding: 20,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'Poppins-Italic',
        color: '#373737'
    },
    individualResult: {
        fontSize: 23,
        textAlign: 'center',
        fontFamily: 'Poppins-BoldItal'
    },
    resultContainer: {
        flexDirection: 'column',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        margin: 10,
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    h2: {
        fontSize: 20,
        textAlign: 'left',
    },
    infoContainer: {
        width: 300,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E9E9FA',
        marginBottom: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    infoContainerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: 'Poppins-Regular'
    },
    hotlineResultsPage: {
        flexDirection: 'row',
        width: 400,
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 10,
    },
    noHotlineResultsPage: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pHotlineResultsPage: {
        // marginHorizontal: 20,
        // marginTop: 20,
        // padding: 20,
        fontSize: 14,
        textAlign: 'left',
        fontFamily: 'Poppins-Italic',
        color: '#373737',
        width: 220,
        // alignSelf: 'flex-end'
    },
    p: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
        fontSize: 18,
        textAlign: 'left',
        fontFamily: 'Poppins-Italic',
        color: '#373737',
        alignSelf: 'flex-end'
    },
    treatmentButton: {
        position: 'absolute',
        width: windowWidth * .9,
        height: 65,
        backgroundColor: '#5451F8',
        borderRadius: 10,
        flex: 0,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        bottom: 20
    },
    buttonContainer: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#5451F8',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
    },
    modalViewContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#FCFCFF',
        alignSelf: 'center',
        width: windowWidth * .95,
        height: 600,
        marginTop: windowHeight * .1,
        marginBottom: windowHeight * .05,
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
        width: '90%',
        marginTop: 30,
        alignSelf: 'center',
        color: '#545454',
    },
    modalHeaderContainer: {
        flex: 0,
        backgroundColor: '#FCFCFF',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 170
    },
    modalHeader: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        color: '#545454',
    },
    modalDescription: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 10,
        color: '#545454',

    },
    scoreHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        fontFamily: 'Poppins-Regular',
    },
    scoreContainer: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    scoreLevel: {
        fontWeight: "600",
        fontSize: 18,
        marginRight: 10,
        color: '#545454'
    },
    scoreLevelSelected: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        marginRight: 10,
    },
    scoreNumber: {
        fontStyle: 'italic',
        fontSize: 18,
        marginRight: 10,
    },
    selectedRange: {
        backgroundColor: "#5451F8",
        color: '#FCFCFF',
        padding: 15,
        borderRadius: 10,
    },
    thickLine: {
        height: 4,
        width: '100%',
        backgroundColor: '#5451F8',
        alignSelf: 'center',
    },
    transparentThickLine: {
        height: 4,
        width: '100%',
        backgroundColor: '#FCFCFF',
        alignSelf: 'center',
    },
    modalSubHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    divideLine: {
        height: 2,
        width: '100%',
        backgroundColor: '#5451F8',
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    transparentLine: {
        height: 2,
        width: '100%',
        backgroundColor: '#FCFCFF',
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    closeModal: {
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'black',
    },
    closeModalIcon: {
        fontSize: 25
    },
})
export default SurveyResult