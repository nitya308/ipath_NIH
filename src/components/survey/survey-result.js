import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Close from '../../assets/icons/close.svg';
import Infographic from '../../assets/icons/infographic';
import QuestionMark from '../../assets/icons/questionMark.svg';

function SurveyResult(props){
    const [modalVisible, setModalVisible] = useState('false');
    const sc = props.scores;
    const totalScore = sc.reduce((sum, num) => sum + num, 0);

    var result = "";

    if (totalScore <=4) result = "no depression";
    else if (totalScore <= 9) result = "mild depression";
    else if (totalScore <= 14) result = "moderate depression";
    else if (totalScore <= 19) result = "moderate to severe depression";
    else if (totalScore <= 27) result = "severe depression";

    return(
        <View style={styles.container}>
            <Text style={styles.resultTitle}>Survey Results</Text>
            <Text style={styles.h1}>Based on your survey results, you are displaying symptoms of <Text style={{fontWeight: 'bold'}}>{result}</Text></Text>
            <TouchableHighlight underlayColor="gray" style={styles.infoContainer} onPress={() => setModalVisible(true)}>
                <View style={styles.infoContainerContent}>
                    <Text style={styles.h2}>What does this mean?</Text>
                    <QuestionMark />
                </View>
            </TouchableHighlight>
            <Infographic width={250} height={80}/>
            <Text style={styles.p}>Depression is more common than you might think. Around 20% of cancer patients display symptoms of depression</Text> 
            <TouchableHighlight underlayColor='gray' style={styles.treatmentButton} onPress={props.press}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Explore Treatments</Text> 
                    <RightArrow />
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => {setModalVisible(!modalVisible)}}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>What does this mean?</Text>
                        <Text style={styles.modalDescription}>Depression symptoms are grouped into the following categories based on points assigned to PHQ-9 responses:</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <View style={styles.scoreHeader}>
                            <Text style={styles.scoreLevel}>Level</Text>
                            <Text style={styles.scoreNumber}>Score</Text>
                        </View>
                        <View style={styles.thickLine} />
                        <View style={[styles.scoreContainer, result==="no depression" ? styles.selectedRange : null]}>
                            <Text style={styles.scoreLevel}>Minimal Depression</Text>
                            <Text style={styles.scoreNumber}>0-4</Text>
                        </View>
                        <View style={styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result==="mild depression" ? styles.selectedRange : null]}>
                            <Text style={styles.scoreLevel}>Mild Depression</Text>
                            <Text style={styles.scoreNumber}>5-9</Text>
                        </View>
                        <View style={styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result==="moderate depression" ? styles.selectedRange : null]}>
                            <Text style={styles.scoreLevel}>Moderate Depression</Text>
                            <Text style={styles.scoreNumber}>10-14</Text>
                        </View>
                        <View style={styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result==="moderate to severe depression" ? styles.selectedRange : null]}>
                            <Text style={styles.scoreLevel}>Moderately Severe Depression</Text>
                            <Text style={styles.scoreNumber}>15-19</Text>
                        </View>
                        <View style={styles.divideLine}></View>
                        <View style={[styles.scoreContainer, result==="severe depression" ? styles.selectedRange : null]}>
                            <Text style={styles.scoreLevel}>Severe Depression</Text>
                            <Text style={styles.scoreNumber}>20+</Text>
                        </View>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setModalVisible(!modalVisible)}}>
                        {/* <Text style={styles.closeModalIcon}>X</Text> */}
                        <Close />
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
    resultTitle: {
        paddingTop: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    h1: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    h2: {
        fontSize: 20,
        textAlign: 'center',
    }, 
    infoContainer:{
        width: 300,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3EFF0',
        marginBottom: 40,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    infoContainerContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    p: {
        marginTop: 50,
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    treatmentButton: {
        position: 'absolute',
        width: windowWidth * .9,
        height: 65,
        backgroundColor: '#469C97',
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
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    modalViewContainer:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
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
    },
    modalHeaderContainer:{
        flex: 0,
        backgroundColor: '#E3EFF0',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 170
    },
    modalHeader:{
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalDescription:{
        fontSize: 20,
        textAlign: 'center',
    },
    scoreHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    scoreContainer:{
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scoreLevel:{
        fontWeight: "600",
        fontSize: 18,
        marginLeft: 10,
    },
    scoreNumber:{
        fontStyle: 'italic',
        fontSize: 18,
        marginRight: 10
    },
    selectedRange:{
        backgroundColor: "#E3EFF0",
    },
    thickLine:{
        height: 4,
        width: '100%',
        backgroundColor: '#469C97',
        alignSelf: 'center',
    },
    modalSubHeader:{
        fontSize: 20,
        fontWeight: 'bold',
    },  
    divideLine:{
        height: 2,
        width: '100%',
        backgroundColor: '#469C97',
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20,
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
export default SurveyResult