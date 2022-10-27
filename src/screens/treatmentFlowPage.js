import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import Checkbox from '../components/checkbox';
import { useSelector } from 'react-redux';
import TreatmentsList from '../components/treatment/treatments-list';
import TreatmentInfo from '../components/treatment/treatment-info';
import Left from '../assets/icons/left.svg';
import Right from '../assets/icons/right.svg';
import { addClick } from '../services/datastore';
import Pill from '../assets/icons/pill.js';
import Speech from '../assets/icons/speech';
import Watch from '../assets/icons/watch';
import TreatmentFilterCard from '../components/treatment/treatmentfiltercard';
import FakeLoading from '../components/treatment/fake-loading';
import {fetchFirstName } from '../actions';
import { connect } from 'react-redux';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



function TreatmentFlowPage(props) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const firstName = async () => { fetchFirstName(user.userId); }
    firstName();
  }, []);

  const firstNameValue = useSelector((state) => state.user.firstName);

  const [scrollRef, setScrollRef] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  // Treatment type filters 
  const [therapyFilter, setTherapyFilter] = useState(false);
  const [medFilter, setMedFilter] = useState(false);
  const [waitingFilter, setWaitingFilter] = useState(false);

  // Treatment location filters
  const [personFilter, setPersonFilter] = useState(false);
  const [remoteFilter, setRemoteFilter] = useState(false);

  const [renderList, setRenderList] = useState(false);
  const [loading, setLoading] = useState(false)

  // Treatment sort options
  const [accessFilter, setAccessFilter] = useState(false);
  const [costFilter, setCostFilter] = useState(false);

  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const fakeLoading = () => {
    setTimeout(() => setRenderList(true), 6000);
  }

  const trackClicks = () => {
    console.log("here");
    if (medFilter) addClick(`users/${user.userId}`, "filter-med", new Date());
    if (therapyFilter) addClick(`users/${user.userId}`, "filter-therapy", new Date());
    if (waitingFilter) addClick(`users/${user.userId}`, "filter-wait", new Date());
    if (personFilter) addClick(`users/${user.userId}`, "filter-person", new Date());
    if (remoteFilter) addClick(`users/${user.userId}`, "filter-remote", new Date());
    if (accessFilter) addClick(`users/${user.userId}`, "filter-access", new Date());
    if (costFilter) addClick(`users/${user.userId}`, "filter-cost", new Date());
  }

  useEffect(() => {
    if (scrollRef) {
      scrollRef.scrollTo({ x: windowWidth * pageNumber })
    }
  }, [pageNumber])

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref={(ref) => { setScrollRef(ref) }}>
        <View style={styles.page}>
          <Text style={styles.pageSubheader}>Hi {firstNameValue},</Text>
          <Text style={[styles.pageHeader, { fontSize: 25 }]}>What type of treatment are you looking for?</Text>
          <View style={styles.columnsContainer}>
            <TouchableHighlight style={medFilter ? [styles.treatmentType, { backgroundColor: "#51A8F8" }] : styles.treatmentType} onPress={() => setMedFilter(!medFilter)}>
              <TreatmentFilterCard selected={medFilter} title="Medication" icon={<Pill height={40} color={medFilter ? "#FFFFFF" : null}></Pill>}></TreatmentFilterCard>
            </TouchableHighlight>
            <TouchableHighlight style={therapyFilter ? [styles.treatmentType, { backgroundColor: "#9B51F8" }] : styles.treatmentType} onPress={() => setTherapyFilter(!therapyFilter)}>
              <TreatmentFilterCard selected={therapyFilter} title="Therapy" icon={<Speech height={40} color={therapyFilter ? "#FFFFFF" : null}></Speech>}></TreatmentFilterCard>
            </TouchableHighlight>
            <TouchableHighlight style={waitingFilter ? [styles.treatmentType, { backgroundColor: "#EF6068" }] : styles.treatmentType} onPress={() => setWaitingFilter(!waitingFilter)}>
              <TreatmentFilterCard selected={waitingFilter} title="Watchful Waiting" icon={<Watch height={40} color={waitingFilter ? "#FFFFFF" : null}></Watch>}></TreatmentFilterCard>
            </TouchableHighlight>
          </View>
          <Text style={styles.pageHeader}>How would you like to receive treatment?</Text>
          <View style={styles.checkboxListContainer}>
            <View style={styles.column50}>
              <Checkbox style={styles.checkbox} isChecked={personFilter} onPress={() => setPersonFilter(!personFilter)} title="In-Person" />
            </View>
            <View style={styles.column50}>
              <Checkbox style={styles.checkbox} isChecked={remoteFilter} onPress={() => setRemoteFilter(!remoteFilter)} title="Remote" />
            </View>
          </View>
          {loading ?
            <>
              <Text style={styles.pageHeader}>Treatment providers: dropdown TBA</Text>
            </>
            :
            <>
              <Text style={styles.pageHeader}>What is most important to you?</Text>
              <View style={styles.rowsContainer}>
                <View style={styles.column}>
                  <Checkbox style={styles.checkbox} isChecked={accessFilter} onPress={() => { setAccessFilter(!accessFilter); setCostFilter(false) }} title="Quick Access to Care" />
                </View>
                <View style={styles.column}>
                  <Checkbox style={styles.checkbox} isChecked={costFilter} onPress={() => { setCostFilter(!costFilter); setAccessFilter(false) }} title="Lowest Cost" />
                </View>
              </View>
            </>
          }

          {loading ?
            <>
              {renderList ?
                <>
                  <TreatmentsList pickTreatment={setSelectedTreatment}
                    therapy={therapyFilter}
                    med={medFilter}
                    waiting={waitingFilter}
                    person={personFilter}
                    remote={remoteFilter}
                    access={accessFilter}
                    cost={costFilter} />
                  <TreatmentInfo treatment={selectedTreatment} press={() => scrollRef.scrollTo({ x: windowWidth * 3 })} />
                </>
                :
                <FakeLoading></FakeLoading>
              }
            </> :
            <TouchableHighlight underlayColor='gray' style={styles.applyButton} onPress={() => { setLoading(true); fakeLoading(); trackClicks(); }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Explore Treatment Options →</Text>
            </TouchableHighlight>
          }
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    margin: 0,
    padding: 0,
  },
  columnsContainer: {
    flexDirection: 'row',
    padding: 5,
    height: 150,
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
  },
  button: {
    height: 150,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    margin: 8,
  },
  buttonContent: {
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
    fontSize: 20
  },
  page: {
    width: windowWidth,
    height: windowHeight * .8,
    alignItems: 'center',
  },
  pageHeader: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 19,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    width: "100%"
  },
  pageSubheader: {
    color: 'gray',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  checkboxListContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 0,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  checkbox: {
    width: "100%",
  },
  backButton: {
    position: 'absolute',
    backgroundColor: '#469C97',
    height: 50,
    width: 50,
    bottom: 50,
    left: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#469C97",
    bottom: 50,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {
    width: "90%",
    height: 70,
    borderRadius: 10,
    backgroundColor: "#469C97",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(null, { fetchFirstName })(TreatmentFlowPage);