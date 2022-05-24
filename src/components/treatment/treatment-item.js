import React from 'react';
import { useSelector, connect } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Bookmark from '../../assets/icons/bookmark';
import CheckMark from '../../assets/icons/check.svg';
import MapPin from '../../assets/icons/mapPin.svg';
import { saveTreatment, deleteSavedTreatment } from '../../actions/index';
import { addClick } from '../../services/datastore';

function TreatmentItem(props) {
  // const dispatch = useDispatch(); 
  const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
  const user = useSelector((state) => state.user)
  // const allTreatments = useSelector((state) => state.treatments.allTreatments);
  // const save = async () => { props.saveTreatment(user.userId, props.treatment.id) }
  return (
    <TouchableHighlight underlayColor="gray" style={styles.treatmentContainer} onPress={props.press}>
      <View>
        <Text style={styles.treatmentName}>{props.treatment.id}  {"$".repeat(props.treatment.cost)}</Text>
        <View style={styles.treatmentTrait}>
          <MapPin />
          <Text style={styles.treatmentInfo}>{props.treatment.data.type}</Text>
        </View>
        <View style={styles.treatmentTrait}>
          <CheckMark />
          <Text style={styles.treatmentInfo}>{props.treatment.data.insurance}</Text>
        </View>
        <View style={styles.treatmentTrait}>
          <CheckMark />
          {/* <Text style={styles.treatmentInfo}>{props.treatment.quickAccess ? "Quick Access" : "No Quick Access"}</Text> */}
        </View>
        <View style={styles.bookmarkContainer}>
          <Bookmark width="30" height="30" treatment={props.treatment} press={() => { savedTreatments.includes(props.treatment.id) ? (props.deleteSavedTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "Unsaved " + props.treatment.id, new Date())) : (props.saveTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "saved " + props.treatment.id, new Date()))}}
          fill={savedTreatments.includes(props.treatment.id) ? "black" : "none"} strokeColor="black"/>
        </View>
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  treatmentContainer: {
    height: 150,
    width: '95%',
    backgroundColor: '#E3EFF0',
    borderRadius: 10,
    marginTop: '2%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  treatmentName: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
    width: "80%",
  },
  treatmentTrait: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  treatmentInfo: {
    paddingLeft: 10
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
})

export default connect(null, { saveTreatment, deleteSavedTreatment })(TreatmentItem); 