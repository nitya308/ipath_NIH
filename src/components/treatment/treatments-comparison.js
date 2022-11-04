import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Close from '../../assets/icons/close.svg';
import { addClick } from '../../services/datastore';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function TreatmentsComparison(props) {
  const user = useSelector((state) => state.user);

  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);
  const [modalFive, setModalFive] = useState(false);

  return (
      <View style={styles.container}>
        <Text style={styles.subheader}>Tap on a question to learn more about each treatment type.</Text>
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalOne(true); addClick(`users/${user.userId}`, "compare-cost", new Date()); }}>
          <View>
            <Text style={styles.buttonText}>How much will this cost?</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalTwo(true); addClick(`users/${user.userId}`, "compare-willwork", new Date()); }}>
          <View>
            <Text style={styles.buttonText}>Will this work?</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalThree(true); addClick(`users/${user.userId}`, "compare-sideeffects", new Date()); }}>
          <View>
            <Text style={styles.buttonText}>What are the side effects?</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalFour(true); addClick(`users/${user.userId}`, "compare-time", new Date()); }}>
          <View>
            <Text style={styles.buttonText}>How soon can I access this?</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="gray" style={styles.compareButton} onPress={() => props.navigation.navigate("Treatments")}>
          <View style={styles.compareButtonContainer}>
            <Text style={styles.compareButtonText}>Explore Treatment Options</Text>
            <RightArrow styles={styles.arrow} />
          </View>
        </TouchableHighlight>


        <Modal animationType="slide" visible={modalFive} onRequestClose={() => { setModalFive(!modalFive) }}>
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeader}>How does this work?</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
              <Text style={styles.modalDescription}>You get no active treatment; you may visit your clinician more often to monitor symptoms, compare options, and discuss other ways to feel better.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Medication</Text>
              <Text style={styles.modalDescription}>Antidepressant medications affect your brain chemistry. These pills are usually taken once or twice a day.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Therapy</Text>
              <Text style={styles.modalDescription}>Talk therapy helps you solve problems and clarify your thoughts. This is usually done in a series of regular visits in person, by phone or using a computer program.</Text>
            </View>
            <Pressable style={styles.closeModal} onPress={() => { setModalOne(!modalFive) }}>
              {/* <Text style={styles.closeModalIcon}>X</Text> */}
              <Close />
            </Pressable>
          </View>
        </Modal>

        <Modal animationType="slide" visible={modalOne} onRequestClose={() => { setModalOne(!modalOne) }}>
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeader}>How much does this cost?</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
              <Text style={styles.modalDescription}>Prices vary depending on number and type of visits to clinician.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Medication</Text>
              <Text style={styles.modalDescription}>Prices vary from $5 to $150+ for a 30 day supply of medication.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Therapy</Text>
              <Text style={styles.modalDescription}>Prices vary from free to $200+ per visit for both in-person and online. Some take insurance.</Text>

            </View>
            <Pressable style={styles.closeModal} onPress={() => { setModalOne(!modalOne) }}>
              {/* <Text style={styles.closeModalIcon}>X</Text> */}
              <Close />
            </Pressable>
          </View>
        </Modal>
        <Modal animationType="slide" visible={modalTwo} onRequestClose={() => { setModalTwo(!modalTwo) }}>
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeader}>Will this work?</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
              <Text style={styles.modalDescription}>23 out of 100 people get better in 3 months and 53 out of 100 experience an improvement in mood in a year by visiting a clinician without getting active treatment.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Medication</Text>
              <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that recover without treatment, another 17 out of 100 will experience an improvement in mood in 1 to 2 months by using antidepressant medication.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Therapy</Text>
              <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that get better without treatment, another 14 out of 100 will experience an improvement in mood in 2 months using talk therapy.</Text>
            </View>
            <Pressable style={styles.closeModal} onPress={() => { setModalTwo(!modalTwo) }}>
              {/* <Text style={styles.closeModalIcon}>X</Text> */}
              <Close />
            </Pressable>
          </View>
        </Modal>
        <Modal animationType="slide" visible={modalThree} onRequestClose={() => { setModalThree(!modalThree) }}>
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeader}>What are the side effects?</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
              <Text style={styles.modalDescription}>Your symptoms may continue or get worse. About 25 out of 100 people see their symptoms get worse.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Medication</Text>
              <Text style={styles.modalDescription}>Nausea, diarrhea and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Therapy</Text>
              <Text style={styles.modalDescription}>Talk therapy can cause you to be uncomfortable, anxious and/or stressed.</Text>
            </View>
            <Pressable style={styles.closeModal} onPress={() => { setModalThree(!modalThree) }}>
              {/* <Text style={styles.closeModalIcon}>X</Text> */}
              <Close />
            </Pressable>
          </View>
        </Modal>
        <Modal animationType="slide" visible={modalFour} onRequestClose={() => { setModalFour(!modalFour) }}>
          <View style={styles.modalViewContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeader}>How soon can I access this?</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
              <Text style={styles.modalDescription}>N/A</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Medication</Text>
              <Text style={styles.modalDescription}>How quickly you can get an appointment varies from same day (telehealth) to several weeks.</Text>
              <View style={styles.divideLine}></View>
              <Text style={styles.modalSubHeader}>Therapy</Text>
              <Text style={styles.modalDescription}>How quickly you can get an appointment varies from same day (telehealth) to 3 months.</Text>
            </View>
            <Pressable style={styles.closeModal} onPress={() => { setModalFour(!modalFour) }}>
              <Close />
            </Pressable>
          </View>
        </Modal>
      </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    margin: 20,
    fontSize: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
    backgroundColor: "#FFFFFF"
  },
  button: {
    width: windowWidth * .9,
    height: windowHeight * .07,
    borderRadius: 10,
    // borderRadius: windowHeight * .035,
    backgroundColor: '#FFFFFF',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
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
    width: '90%',
    marginTop: 30,
    alignSelf: 'center',
  },
  modalHeaderContainer: {
    flex: 0,
    backgroundColor: '#E3EFF0',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 125
  },
  modalHeader: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 20
  },
  modalSubHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  divideLine: {
    height: 2,
    width: '100%',
    backgroundColor: '#469C97',
    alignSelf: 'center',
    margin: 20
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  compareButton: {
    position: 'absolute',
    bottom: 30,
    width: windowWidth * .9,
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
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  compareButtonText: {
    marginLeft: '5%',
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
})
export default TreatmentsComparison