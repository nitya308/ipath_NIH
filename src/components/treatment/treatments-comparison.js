import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Close from '../../assets/icons/close.svg';
import { addClick } from '../../services/datastore';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import CompareBlock from './compare_block';
import DownArrow from '../../assets/icons/DownArrow.svg'
import { ScrollView } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function TreatmentsComparison(props) {
  const user = useSelector((state) => state.user);

  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);
  const [modalFour, setModalFour] = useState(false);
  const [modalFive, setModalFive] = useState(false);

  const compareData = {
    1: {
      waiting: 'You will monitor symptoms, but not actively receive treatment (such as medication or therapy). This will involve completing the depression survey every 2 weeks for 12 weeks. Many people monitor symptoms with their doctor. At any time you can decide to try a treatment.',
      med: 'Selective Serotonin Reuptake Inhibitors (SSRIs) are antidepressant medications that address symptoms by affecting your brain chemistry. These pills are usually taken once per day.',
      therapy: "Therapy helps you solve problems and clarify your thoughts. This is usually done in a series of regular in-person or phone visits talking with a therapist, or guided by a computer application."
    },
    2: {
      waiting: "Prices vary depending on number and type of visits to clinician.",
      med: "Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.",
      therapy: "Prices vary from free to $200+ per visit for both in-person and online. Some take insurance.",
    },
    3: {
      waiting: "23 out of 100 people experienced an increase in mood levels in 3 months and 53 out of 100 experienced an increase in mood levels in a year by visiting a clincian without receiving active treatment.",
      med: "In addition to the 23 out of 100 people that experienced an increase in mood levels without treatment, another 17 out of 100 will experience an increase in mood levels in 1 month using antidepressant medication.",
      therapy: "In addition to the 23 out of 100 people that experienced an increase in mood levels without treatment, another 14 out of 100 will experience an increase in mood levels in 2 months using therapy.",
    },
    4: {
      waiting: "Your symptoms may continue to worsen. About 25 out of 100 people see their symptoms get worse.",
      med: "Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.",
      therapy: "Talk therapy can cause you to feel uncomfortable, anxious and/or stressed.",
    },
    5: {
      waiting: "Watchful waiting is a self-monitoring process that can begin immediately.",
      med: "There are therapy options that you can access immediately, as well as some that will take longer. If timing is important to you, you can sort by quick access when you filter for treatments.",
      therapy: "There are medication options that you can access immediately, as well as some options that will take longer. If timing is important to you, you can sort by quick access when you filter for treatments.",
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>Tap on a question to learn more about each treatment type.</Text>
      {modalOne ? <CompareBlock close={() => { console.log("closing"); setModalOne(false); }} title="How does this work?" waiting={compareData[1].waiting} med={compareData[1].med} therapy={compareData[1].therapy} width={windowWidth * .9}></CompareBlock> :
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalOne(!modalOne); addClick(`users/${user.userId}`, "compare-howwork", new Date()); }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={windowHeight < 670 ? styles.buttonTextSS : styles.buttonText}>How does this work?</Text>
            <DownArrow style={styles.downicon}></DownArrow>
          </View>
        </TouchableHighlight>
      }
      {modalTwo ? <CompareBlock close={() => { console.log("closing"); setModalTwo(false); }} title="How much does this cost?" waiting={compareData[2].waiting} med={compareData[2].med} therapy={compareData[2].therapy} width={windowWidth * .9}></CompareBlock> :
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalTwo(true); addClick(`users/${user.userId}`, "compare-cost", new Date()); }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={windowHeight < 670 ? styles.buttonTextSS : styles.buttonText}>How much does this cost?</Text>
            <DownArrow style={styles.downicon}></DownArrow>
          </View>
        </TouchableHighlight>
      }
      {modalThree ? <CompareBlock close={() => { console.log("closing"); setModalThree(false); }} title="Will this work?" waiting={compareData[3].waiting} med={compareData[3].med} therapy={compareData[3].therapy} width={windowWidth * .9}></CompareBlock> :
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalThree(true); addClick(`users/${user.userId}`, "compare-willwork", new Date()); }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={windowHeight < 670 ? styles.buttonTextSS : styles.buttonText}>Will this work?</Text>
            <DownArrow style={styles.downicon}></DownArrow>
          </View>
        </TouchableHighlight>
      }
      {modalFour ? <CompareBlock close={() => { console.log("closing"); setModalFour(false); }} title="What are possible side effects??" waiting={compareData[4].waiting} med={compareData[4].med} therapy={compareData[4].therapy} width={windowWidth * .9}></CompareBlock> :
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalFour(true); addClick(`users/${user.userId}`, "compare-sideffects", new Date()); }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={windowHeight < 670 ? styles.buttonTextSS : styles.buttonText}>What are possible side effects?</Text>
            <DownArrow style={styles.downicon}></DownArrow>
          </View>
        </TouchableHighlight>
      }
      {modalFive ? <CompareBlock close={() => { console.log("closing"); setModalFive(false); }} title="How quickly can I access this?" waiting={compareData[5].waiting} med={compareData[5].med} therapy={compareData[5].therapy} width={windowWidth * .9}></CompareBlock> :
        <TouchableHighlight underlayColor="gray" style={styles.button} onPress={() => { setModalFive(true); addClick(`users/${user.userId}`, "compare-sideffects", new Date()); }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={windowHeight < 670 ? styles.buttonTextSS :styles.buttonText}>How quickly can I access this?</Text>
            <DownArrow style={styles.downicon}></DownArrow>
          </View>
        </TouchableHighlight>
      }
      <TouchableHighlight underlayColor="gray" style={styles.compareButton} onPress={() => props.navigation.navigate("Treatments")}>
        <View style={styles.compareButtonContainer}>
          <Text style={styles.compareButtonText}>Explore Treatment Options</Text>
          <RightArrow styles={styles.arrow} />
        </View>
      </TouchableHighlight>
    </ScrollView>
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
    margin: 15,
    marginBottom: 0,
    fontSize: 18,
    fontFamily: "Poppins-Italic",
    color: '#545454'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
    backgroundColor: "#FFFFFF",
    height: windowHeight * 2,
  },
  button: {
    width: windowWidth * .9,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    lineHeight: 30,
    fontSize: 20,
  },
  buttonTextSS: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    lineHeight: 30,
    fontSize: 15,
  },
  downicon: {
    paddingVertical: 15,
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
    width: windowWidth * .9,
    height: '10%',
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "#5451F8",
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
    fontFamily: 'Poppins-Regular',
  },
})
export default TreatmentsComparison