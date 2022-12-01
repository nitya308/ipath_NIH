import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, Dimensions, Modal, Pressable } from 'react-native';
import TreatmentItem from '../treatment/treatment-item';
import { SafeAreaView } from 'react-native-safe-area-context';
import TreatmentItemTagText from '../treatment/treatment-tag-text';
import Pill from '../../assets/icons/pill.js';
import Speech from '../../assets/icons/speech.js';
import Watch from '../../assets/icons/watch.js';
import PhoneLink from '../../assets/icons/phonelink.js';
import WebLink from '../../assets/icons/weblink.js';
import BackCircle from '../../assets/icons/BackCircle.svg';

const windowHeight = Dimensions.get('window').height;

function SavedTreatments(props) {
  const [scrollRef, setScrollRef] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null)
  const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
  const allTreatments = useSelector((state) => state.treatments.allTreatments);
  const [modalVisible, setModalVisible] = useState(false);

  function calcTypeTag(type) {
    switch (type) {
      case "Medication/Therapy":
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TreatmentItemTagText icon={<Pill width={20} height={20} />} name="Medication" />
            <TreatmentItemTagText icon={<Speech width={30} height={10} />} name="Therapy" />
          </View>
        )
      case "Watchful Waiting":
        return <TreatmentItemTagText icon={<Watch width={20} height={20} />} name="Watchful Waiting" />;
      case "Medication":
        return <TreatmentItemTagText icon={<Pill width={20} height={20} />} name="Medication" />;
      case "Therapy":
        return <TreatmentItemTagText icon={<Speech width={30} height={10} />} name="Therapy" />;
      default:
        return null;
    }
  }

  function calcContact(contacttype, info) {
    switch (contacttype) {
      case "web":
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}>
            <WebLink width={30} height={30}></WebLink>
            <Text style={{ fontSize: 20, lineHeight: 30 }}>{info}</Text>
          </View>
        )
      case "phone":
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <PhoneLink width={30} height={30}></PhoneLink>
            <Text>{info}</Text>
          </View>
        )
      default:
        return null;
    }
  }

  return (
    <View style={{margin:0}}>
      <ScrollView horizontal={true} pagingEnabled={true} ref={(ref) => { setScrollRef(ref) }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Saved Treatments</Text>
          <View style={styles.list}>
            {allTreatments.filter((treat) => savedTreatments.includes(treat.id)).map((treatment) => {
              return (
                <TreatmentItem key={treatment.id} treatment={treatment} press={() => {
                  setSelectedTreatment(treatment);
                  setModalVisible(true);
                }} />
              )
            })}
          </View>
        </ScrollView>
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalViewContainer}>
          <View style={[styles.modalHeaderContainer, { backgroundColor: "#90EE90" }]}>
          </View>
          <View style={styles.treatmentsection1}>
            <Text style={styles.treatmentName}>{selectedTreatment && selectedTreatment.id}</Text>
            {selectedTreatment && calcTypeTag(selectedTreatment.data.type)}
            {selectedTreatment && calcContact("web", selectedTreatment.data.link)}
          </View>
          <ScrollView style={styles.modalContainer}>
            <Text style={styles.modalSubHeader}>About Us</Text>
            <Text style={styles.modalDescription}>{selectedTreatment && selectedTreatment.data.desc}</Text>
            <View style={styles.line} />
            <Text style={styles.modalSubHeader}>Process</Text>
            <Text style={styles.modalDescription}>{selectedTreatment && selectedTreatment.data.process}</Text>
            <View style={styles.line} />
            <Text style={styles.modalSubHeader}>Wait time</Text>
            <Text style={styles.modalDescription}>{selectedTreatment && selectedTreatment.data.time}</Text>
            <View style={styles.line} />
          </ScrollView>
          <Pressable style={styles.closeModal} onPress={() => { setModalVisible(!modalVisible) }}>
            <BackCircle width="50" height="50" />
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: windowWidth,
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
  modalViewContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: windowWidth,
    marginTop: windowHeight * .05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHeaderContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  modalHeader: {
    padding: 35,
    marginBottom: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: "100%",
  },
  treatmentsection1: {
    backgroundColor: "#E9E9FA",
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  treatmentName: {
    color: "#5451F8",
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  line: {
    height: 1,
    width: '95%',
    backgroundColor: '#5451F8',
    marginTop: 20,
    marginBottom: 20
  },
  modalSubHeader: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'Poppins-Bold',
  },
  modalDescription: {
    fontSize: 20,
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  closeModalIcon: {
    fontSize: 25
  },
  rowsContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'flex-start'
  },
})
export default SavedTreatments;