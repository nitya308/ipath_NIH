import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, SafeAreaView, Dimensions, Modal, Pressable } from 'react-native';
import TreatmentItemTagText from '../components/treatment/treatment-tag-text';
import { addClick } from '../services/datastore';
import Pill from '../assets/icons/pill.js';
import Speech from '../assets/icons/speech.js';
import Watch from '../assets/icons/watch.js';
import PhoneLink from '../assets/icons/phonelink.js';
import WebLink from '../assets/icons/weblink.js';
import BackCircle from '../assets/icons/BackCircle.svg';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


function TreatmentExpanded(props) {

  function calcTypeTag(type) {
    switch (type) {
      case "Medication/Therapy":
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TreatmentItemTagText icon={<Pill width={20} height={20} />} name="Medication" />
            <TreatmentItemTagText icon={<Speech width={18} height={18} />} name="Therapy" />
          </View>
        )
      case "Watchful Waiting":
        return <TreatmentItemTagText icon={<Watch width={20} height={20} />} name="Watchful Waiting" />;
      case "Medication":
        return <TreatmentItemTagText icon={<Pill width={20} height={20} />} name="Medication" />;
      case "Therapy":
        return <TreatmentItemTagText icon={<Speech width={18} height={18} />} name="Therapy" />;
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
        <View style={styles.modalViewContainer}>
          {/* here we need to add image */}
          <View style={[styles.modalHeaderContainer, { backgroundColor: "#90EE90" }]}>
          </View>
          <View style={styles.treatmentsection1}>
            <Text style={styles.treatmentName}>{props.selectedTreatment && props.selectedTreatment.id}</Text>
            {props.selectedTreatment && calcTypeTag(props.selectedTreatment.data.type)}
            {props.selectedTreatment && calcContact("web", props.selectedTreatment.data.link)}
          </View>
          <ScrollView style={styles.modalContainer}>
            <Text style={styles.modalSubHeader}>About Us</Text>
            <Text style={styles.modalDescription}>{props.selectedTreatment && props.selectedTreatment.data.desc}</Text>
            <View style={styles.line} />
            <Text style={styles.modalSubHeader}>Process</Text>
            <Text style={styles.modalDescription}>{props.selectedTreatment && props.selectedTreatment.data.process}</Text>
            <View style={styles.line} />
            <Text style={styles.modalSubHeader}>Wait time</Text>
            <Text style={styles.modalDescription}>{props.selectedTreatment && props.selectedTreatment.data.time}</Text>
            <View style={styles.line} />
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  columnsContainer: {
    flexDirection: 'row',
    padding: 5,
    height: 150,
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
  column: {
    width: "100%",
    padding: 10,
  },
  column50: {
    width: "50%",
    flex: 1,
    paddingHorizontal: 10,
  },
  treatmentType: {
    backgroundColor: "#ffffff",
    padding: 10,
    paddingVertical: 20,
    margin: 5,
    width: '30%',
    height: 130,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default TreatmentExpanded;