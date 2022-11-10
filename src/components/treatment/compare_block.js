import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import UpArrow from '../../assets/icons/uparrow.svg';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function CompareBlock(props) {
  return (
    <ScrollView>
      <View style={styles.modalViewContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.modalHeaderContainer} onPress={() => props.close()}>
            <Text style={styles.modalHeader}>{props.title}</Text>
            <UpArrow style={styles.upicon}></UpArrow>
          </View>
        </TouchableWithoutFeedback>
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
    </ScrollView>
  )
}

export default CompareBlock

const styles = StyleSheet.create({
  modalViewContainer: {
    flex: 1,
    width: windowWidth * .9,
    alignItems: 'flex-start',
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
    flex: 1,
    padding: 20,
    width: windowWidth * .9,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#5451F8',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  modalHeader: {
    textAlign: 'left',
    lineHeight: 30,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: "#FFFFFF"
  },
  upicon: {
    paddingVertical: 15
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