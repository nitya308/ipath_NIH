import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable, ScrollView } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Speech from '../../assets/icons/speech';
import Pill from '../../assets/icons/pill';
import Watch from '../../assets/icons/watch';
import Close from '../../assets/icons/close.svg';
import Back from '../../assets/icons/back.svg';
import Chevron from '../../assets/icons/chevron.svg';
import { addClick } from '../../services/datastore';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const treatmentData = {
  "Therapy": {
    description: "A weekly 30-60 minute session working with a therapist either in person or on a computer: using a program on your own or with support from your clinician by email or phone.",
    subtitle: "Frequent in-person or remote sessions with a therapist",
    efficacy: "In addition to the 23 out of 100 people that recover without treatment, another 14 out of 100 will recover in 2 months using talk therapy. In addition to the 23 people who recover without treatment, another 26 in 100 people recover with a combination of SSRIs and talk therapy.",
    cost: "Prices vary from free to $200+ per visit for both in-person and online. Some take insurance.",
    sideEffects: "Talk therapy can cause you to feel uncomfortable, anxious and/or stressed.",
    color: "#9B51F8",
    iconReq: <Speech width={20} height={20} color="#FFFFFF"/>
  },
  "Medication": {
    description: "Selective Serotonin Reuptake Inhibitors (SSRIs) are medications that address symptoms by affecting your brain chemistry. These pills are usually taken once per day.",
    subtitle: "Specialist-prescribed antidepressants",
    efficacy: "In addition to the 23 out of 100 people that experienced an increase in mood levels without treatment, another 17 out of 100 will experience an increase in mood levels in 1 month using antidepressant medication.",
    cost: "Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.",
    sideEffects: "Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.",
    color: "#51A8F8",
    iconReq: <Pill width={20} height={20} color="#FFFFFF"/>
  },
  "Watchful Waiting": {
    description: "You will monitor symptoms, but not actively receive treatment (such as medication or therapy). This will involve completing the depression survey every 2 weeks for 12 weeks. Many people monitor symptoms with their doctor. At any time you can decide to try a treatment.",
    subtitle: "Monitor symptoms without direct action",
    efficacy: "23 out of 100 people experienced an increase in mood levels in 3 months and 53 out of 100 experienced an increase in mood levels in a year by visiting a clincian without receiving active treatment.",
    cost: "Prices vary depending on number and type of visits to clinician.",
    sideEffects: "Your symptoms may continue to worsen. About 25 out of 100 people see their symptoms get worse.",
    color: "#EF6068",
    iconReq: <Watch width={20} height={20} color="#FFFFFF"/>
  }
};
function TreatmentsOverview(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("Watchful Waiting");
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.options}>
      <Text style={styles.subheader}>Select the options below to learn more.</Text>
      <TouchableHighlight underlayColor="gray" style={[styles.option, { backgroundColor: "#51A8F8" }]} onPress={() => { setSelectedType("Medication"); setModalVisible(true); addClick(`users/${user.userId}`, "option-med", new Date()); }}>
        <View style={styles.optionContainer}>
          <Pill width={35} height={35} style={styles.icon} color="#FFFFFF" />
          <Text style={styles.optionHeader}>Medication</Text>
          <View style={{ position: 'absolute', right: 10 }}>
            <Chevron color="#FFFFFF" />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="gray" style={[styles.option, { backgroundColor: "#EF6068" }]} onPress={() => { setSelectedType("Watchful Waiting"); setModalVisible(true); addClick(`users/${user.userId}`, "option-wwaiting", new Date()); }}>
        <View style={styles.optionContainer}>
          <Watch width={35} height={35} style={styles.icon} color="#FFFFFF" />
          <Text style={styles.optionHeader}>Watchful Waiting</Text>
          <View style={{ position: 'absolute', right: 10 }}>
            <Chevron color="#FFFFFF" />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="gray" style={[styles.option, { backgroundColor: "#9B51F8" }]} onPress={() => { setSelectedType("Therapy"); setModalVisible(true); addClick(`users/${user.userId}`, "option-talktherapy", new Date()); }}>
        <View style={styles.optionContainer}>
          <Speech width={35} height={35} style={styles.icon} color="#FFFFFF" />
          <Text style={styles.optionHeader}>Talk Therapy</Text>
          <View style={{ position: 'absolute', right: 10 }}>
            <Chevron color="#FFFFFF" />
          </View>
        </View>
      </TouchableHighlight>
      <Text style={{ fontStyle: 'italic', paddingHorizontal: "6%", fontSize: 18, marginTop: 20, fontWeight: '500' }}>A combination of Medication and Talk Therapy can also be an effective treatment method.</Text>
      <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalViewContainer}>
          <View style={[styles.modalHeaderContainer, { backgroundColor: treatmentData[selectedType].color }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>{selectedType}</Text>
              {treatmentData[selectedType].iconReq}
            </View>
            <Text style={styles.modalsubtitle}>{treatmentData[selectedType].subtitle}</Text>
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
          <Pressable style={styles.closeModal} onPress={() => { setModalVisible(!modalVisible) }}>
            <Back width="20" height="20" />
          </Pressable>
        </View>
      </Modal>
      <TouchableHighlight underlayColor="gray" style={styles.compareButton} onPress={() => props.navigation.navigate("Compare Treatment Types")}>
        <View style={styles.compareButtonContainer}>
          <Text style={styles.compareButtonText}>Compare Treatment Types</Text>
          <RightArrow styles={styles.arrow} />
        </View>
      </TouchableHighlight>
    </View>
  )
}
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontStyle: 'italic',
    margin: 20,
    fontSize: 18
  },
  options: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FCFFFF',
  },
  option: {
    height: windowHeight * .12,
    width: windowWidth * .8,
    backgroundColor: '#E3EFF0',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: windowHeight * .03
  },
  optionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-start',
    paddingLeft: "7%"
  },
  optionHeader: {
    fontSize: 22,
    fontWeight: '500',
    marginLeft: "10%",
    color: "#FFFFFF"
  },
  optionText: {
    fontSize: 19,
    paddingLeft: 15,
    fontStyle: 'italic',
  },
  icon: {
    marginLeft: 15
  },
  arrow: {
    alignSelf: 'flex-start'
  },
  modalViewContainer: {
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
  modalHeaderContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    height: 1,
    width: '95%',
    backgroundColor: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  modalHeader: {
    paddingTop: 30,
    paddingLeft: 60,
    alignSelf: 'center',
    width: "100%",
    flexDirection: 'row'
  },
  modalHeaderText: {
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  modalsubtitle: {
    fontSize: 15,
    padding: 20,
    color: "#FFFFFF",
    fontFamily: "Poppins-Italic"
  },
  modalDescription: {
    fontSize: 20,
  },
  modalSubHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeModal: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  closeModalIcon: {
    fontSize: 25
  },
  compareButton: {
    width: windowWidth * .9,
    height: '10%',
    paddingLeft: 10,
    marginTop: 30,
    backgroundColor: '#5451F8',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center'
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
    paddingLeft: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
})
export default TreatmentsOverview