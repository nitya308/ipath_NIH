import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import { useSelector, connect } from 'react-redux';
import Filter from '../../assets/icons/filter';
import Bookmark from '../../assets/icons/bookmark';
import Close from '../../assets/icons/close.svg';
import Checkbox from '../checkbox';
import TreatmentInfo from './treatment-info';
import TreatmentItem from './treatment-item';
import { fetchTreatments } from '../../actions/index';
import { useSelector } from 'react-redux';
import { addClick } from '../../services/datastore';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
function TreatmentsList(props) {
  const user = useSelector((state) => state.user);
  const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
  const allTreatments = useSelector((state) => state.treatments.allTreatments);

  const [tempTherapyFilter, setTempTherapyFilter] = useState(false);
  const [tempMedFilter, setTempMedFilter] = useState(false); // to display in modal, not applied unless user clicks 'apply'
  const [tempWaitFilter, setTempWaitFilter] = useState(false);

  const [therapyFilter, setTherapyFilter] = useState(false);
  const [medFilter, setMedFilter] = useState(false);
  const [waitFilter, setWaitFilter] = useState(false);

  const [savedFilter, setSavedFilter] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  const [scrollRef, setScrollRef] = useState(null);

  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const checkFilters = (treatment) => {
    if (therapyFilter && treatment.data.type === "Therapy") {
      return true;
    }
    if (medFilter && treatment.data.type === "Medication") {
      return true;
    }
    if (waitFilter && treatment.data.type === "Watchful Waiting") {
      return true;
    }
    if (!waitFilter && !medFilter && !therapyFilter) {
      return true;
    }
    return false;
  }

  const applyFilters = () => {
    if(tempMedFilter) addClick(`users/${user.userId}`, "filter-med", new Date());
    if(tempTherapyFilter) addClick(`users/${user.userId}`, "filter-therapy", new Date());
    if(tempWaitFilter) addClick(`users/${user.userId}`, "filter-wait", new Date());
    setMedFilter(tempMedFilter);
    setTherapyFilter(tempTherapyFilter);
    setWaitFilter(tempWaitFilter);
    setFilterModal(!filterModal);
  }

  useEffect(() => {
    if (filterModal) {
      setTempMedFilter(medFilter);
      setTempTherapyFilter(therapyFilter);
      setTempWaitFilter(waitFilter);
    }
  }, [filterModal])
  return (
    <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref={(ref) => { setScrollRef(ref) }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Treatment Options</Text>
        <View style={styles.filtersContainer}>
          <Pressable onPress={() => setFilterModal(true)} style={[styles.filterContainer, (therapyFilter || medFilter || waitFilter) ? { borderWidth: "1", borderColor: "white" } : null]}>
            <Text style={styles.filterText}>Filter</Text>
            <Filter width="24" height="24" strokeColor="white" />
          </Pressable>
          <Pressable onPress={() => setSavedFilter(!savedFilter)} style={[styles.filterContainer, savedFilter ? { borderWidth: "1", borderColor: "white" } : null]}>
            <Text style={styles.filterText}>Saved</Text>
            <Bookmark width="24" height="24" fill={savedFilter ? "white" : "none"} strokeColor="white" />
          </Pressable>
        </View>
        <View style={styles.list}>
          {
            savedFilter && allTreatments ?
              allTreatments.filter((treat) => savedTreatments.includes(treat.id)).filter((treat) => checkFilters(treat)).map((treatment) => {
                return (
                  <TreatmentItem key={treatment.id} press={() => {
                    setSelectedTreatment(treatment);
                    scrollRef.scrollToEnd();
                  }} treatment={treatment} />
                )
              })
              :
              allTreatments?.filter((treat) => checkFilters(treat)).map((treatment) => {
                return (
                  <TreatmentItem key={treatment.id} press={() => {
                    setSelectedTreatment(treatment);
                    scrollRef.scrollToEnd();
                  }} treatment={treatment} />
                )
              })
          }
        </View>
      </ScrollView>
      <TreatmentInfo press={() => scrollRef.scrollTo({ x: 0 })} treatment={selectedTreatment} />
      <Modal animationType="slide" visible={filterModal} transparent={true} onRequestClose={() => setFilterModal(!filterModal)}>
        <View style={styles.modalViewContainer}>
          <Text style={styles.modalHeader}>Filter Treatments</Text>
          <Text style={styles.modalSubHeader}>Show me treatments that are...</Text>
          <View style={styles.checkboxContainerOne}>
            <View style={styles.modalFilter}>
              <Checkbox title="Talk Therapy" isChecked={tempTherapyFilter} onPress={() => setTempTherapyFilter(!tempTherapyFilter)} />
            </View>
            <View style={styles.modalFilter}>
              <Checkbox style={styles.modalFilter} title="Medication" isChecked={tempMedFilter} onPress={() => setTempMedFilter(!tempMedFilter)} />
            </View>
            <View style={styles.modalFilter}>
              <Checkbox style={styles.modalFilter} title="Watchful Waiting" isChecked={tempWaitFilter} onPress={() => setTempWaitFilter(!tempWaitFilter)} />
            </View>
          </View>
          <Pressable style={styles.closeModal} onPress={() => { setFilterModal(!filterModal) }}>
            <Close />
          </Pressable>
          <TouchableHighlight style={styles.applyButton}>
            <Text style={styles.applyButtonText} onPress={applyFilters}>Apply</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    width: windowWidth,
    margin: 0,
    padding: 0,
    paddingTop: '1%',
  },
  filtersContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    margin: 15,
    width: 100,
    backgroundColor: '#469C97',
    height: 32,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  filterText: {
    fontSize: 16,
    color: 'white'
  },
  list: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
  },
  modalViewContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 340,
    height: 450,
    marginTop: windowHeight * .1,
    marginBottom: windowHeight * .1,
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
    width: '100%',
    paddingLeft: 30
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
    fontStyle: 'italic',
    marginTop: 30,
    paddingLeft: 10,
  },
  checkboxContainerOne: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 10,
  },
  modalFilter: {
    marginTop: 20,
    marginLeft: 10
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeModalIcon: {
    fontSize: 25
  },
  applyButton: {
    alignSelf: 'center',
    width: 150,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#469C97',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  applyButtonText: {
    color: 'white',
    fontSize: 15
  }
})

const treatmentData = [
  {
    name: "Treatment 1",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: true,
    cost: 2,
    category: "Medication"
  },
  {
    name: "Treatment 2",
    type: "In-Person",
    takesInsurance: true,
    quickAccess: true,
    cost: 1,
    category: "Watchful Waiting"
  },
  {
    name: "Treatment 3",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: false,
    cost: 3,
    category: "Talk Therapy"
  },
  {
    name: "Treatment 4",
    type: "Telehealth",
    takesInsurance: false,
    quickAccess: true,
    cost: 2,
    category: "Medication"
  },
  {
    name: "Treatment 5",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: true,
    cost: 3,
    category: "Talk Therapy"
  },
  {
    name: "Treatment",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: true,
    cost: 2,
    category: "Medication"
  },
  {
    name: "Treatment",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: true,
    cost: 1,
    category: "Medication"
  },
  {
    name: "Treatment Woohoo",
    type: "In-Person",
    takesInsurance: false,
    quickAccess: true,
    cost: 1,
    category: "Medication"
  },
]
export default connect(null, { fetchTreatments })(TreatmentsList);