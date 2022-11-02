import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import { useSelector, connect } from 'react-redux';
import Filter from '../../assets/icons/filter';
import Bookmark from '../../assets/icons/bookmark';
import Close from '../../assets/icons/close.svg';
import Checkbox from '../checkbox';
import TreatmentItem from './treatment-item';
import { fetchTreatments } from '../../actions/index';
import { addClick } from '../../services/datastore';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function TreatmentsList(props) {
  const user = useSelector((state) => state.user);
  console.log(props)
  const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
  const allTreatments = useSelector((state) => state.treatments.allTreatments);

  const checkTypeFilters = (treatment) => {
    if (props.therapy && (treatment.data.type === "Therapy" || treatment.data.type === "Medication/Therapy")) {
      return true;
    }
    if (props.med && (treatment.data.type === "Medication" || treatment.data.type === "Medication/Therapy")) {
      return true;
    }
    if (props.waiting && treatment.data.type === "Watchful Waiting") {
      return true;
    }
    if (!props.waiting && !props.med && !props.therapy) {
      return true;
    }
    return false;
  }

  const checkLocFilters = (treatment) => {
    if (props.person && (treatment.data.place === "in-person" || treatment.data.place === "in-person/telehealth")) return true;
    if (props.remote && (treatment.data.place === "telehealth" || treatment.data.place === "in-person/telehealth")) return true;
    if (!props.person && !props.remote) return true;
    return false;
  }

  function compare(treat1, treat2) {
    if (props.cost) {
      return (treat1.data.costNumber < treat2.data.costNumber ? -1 : 1);
    } else if (props.access) {
      return (treat1.data.waitOrder < treat2.data.waitOrder ? -1 : 1);
    } else {
      return 0;
    }
  }

  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          {
            allTreatments?.filter((treat) => checkTypeFilters(treat) && checkLocFilters(treat)).length === 0 ?
              <Text>No treatments meet these criteria</Text>
              :
              allTreatments?.filter((treat) => checkTypeFilters(treat) && checkLocFilters(treat)).sort(compare).map((treatment) => {
                return (
                  <TreatmentItem key={treatment.id} press={() => {
                    props.pickTreatment(treatment)
                    props.press();
                  }} treatment={treatment} />
                )
              })
          }
        </View>
      </ScrollView>
    </View>
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
    width: 120,
    backgroundColor: '#469C97',
    height: 40,
    borderRadius: 20,
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
    paddingBottom: 200,
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
    paddingBottom: 200,
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
    marginTop: 10,
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
    width: 200,
    height: 50,
    borderRadius: 25,
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
export default connect(null, { fetchTreatments })(TreatmentsList);