import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import UpArrow from '../../assets/icons/uparrow.svg';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function CompareBlock(props) {
  return (
    <View style={[styles.modalViewContainer, { width: props.width }]}>
      <TouchableWithoutFeedback onPress={() => props.close()} style={[styles.modalHeaderContainer, { width: props.width }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.modalHeader}>{props.title}</Text>
            <UpArrow style={styles.upicon}></UpArrow>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <View style={styles.modalRestContainer}>
          <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
          <Text style={styles.modalDescription}>{props.waiting}</Text>
          <View style={styles.divideLine}></View>
          <Text style={styles.modalSubHeader}>Medication</Text>
          <Text style={styles.modalDescription}>{props.med}</Text>
          <View style={styles.divideLine}></View>
          <Text style={styles.modalSubHeader}>Therapy</Text>
          <Text style={styles.modalDescription}>{props.therapy}</Text>
        </View>
      </View>
    </View>

  )
}

export default CompareBlock

const styles = StyleSheet.create({
  modalViewContainer: {
    marginTop: 30,
    backgroundColor: 'white',
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
  modalRestContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#5451F8",
    padding: 20,
    width: "100%"
  },
  modalHeaderContainer: {
    backgroundColor: '#5451F8',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  modalHeader: {
    lineHeight: 30,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: "#FFFFFF"
  },
  upicon: {
    paddingVertical: 15,
  },
  modalDescription: {
    fontSize: 20
  },
  modalSubHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  divideLine: {
    height: 2,
    marginVertical: 20,
    width: '100%',
    backgroundColor: '#5451F8',
    flex: 1
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

});