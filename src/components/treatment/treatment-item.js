import React from 'react';
// import storage from '@react-native-firebase/storage';
import { useSelector, connect } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Bookmark from '../../assets/icons/bookmark';
import CheckMark from '../../assets/icons/check.js';
import MapPin from '../../assets/icons/mapPin';
import Pill from '../../assets/icons/pill';
import Speech from '../../assets/icons/speech';
import Watch from '../../assets/icons/watch';
import { saveTreatment, deleteSavedTreatment } from '../../actions/index';
import { addClick } from '../../services/datastore';
import firebase from '../../services/datastore.js';


import TreatmentItemTag from './treatment-item-tag';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const storage = firebase.storage()

function TreatmentItem(props) {
  // const dispatch = useDispatch(); 
  const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
  const user = useSelector((state) => state.user)
  const [imageUrl, setImageUrl] = useState(undefined);

  // console.log('props treatment',props.treatment);

  useEffect(() => {
    storage
      .refFromURL(props.treatment.data.img) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }, []);

  function calcTypeTag(type) {
    switch (type) {
      case "Medication/Therapy":
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <TreatmentItemTag icon={<Pill width={20} height={20} />} />
            <TreatmentItemTag icon={<Speech width={18} height={18} />} />
          </View>
        )
      case "Watchful Waiting":
        return <TreatmentItemTag icon={<Watch width={20} height={20} />} />;
      case "Medication":
        return <TreatmentItemTag icon={<Pill width={20} height={20} />} />;
      case "Therapy":
        return <TreatmentItemTag icon={<Speech width={18} height={18} />} />;
      default:
        return null;
    }
  }
  return (
    <TouchableHighlight underlayColor="gray" style={styles.treatmentContainer} onPress={props.press}>
      <View style={styles.cardContainer}>
        <View style={styles.leftHalfOfCard}>
          <View style={styles.typeAndSave}>
            <View style={styles.treatmentTraitContainer}>
              {calcTypeTag(props.treatment.data.type)}
            </View>
            <View style={styles.savedSection}>
              {savedTreatments.includes(props.treatment.id) ? <Text style={styles.savedText}>Saved</Text> : <Text style={styles.savedText}> Save </Text>}
              <View style={styles.bookmarkContainer}>
                <Bookmark width="24" height="24" treatment={props.treatment} press={() => { savedTreatments.includes(props.treatment.id) ? (props.deleteSavedTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "Unsaved " + props.treatment.id, new Date())) : (props.saveTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "saved " + props.treatment.id, new Date())) }}
                  fill={savedTreatments.includes(props.treatment.id) ? "black" : "none"} strokeColor="black" />
              </View>
            </View>
          </View>
          <View style={styles.treatmentHeaderContainer}>
            <Text style={styles.treatmentName}>{props.treatment.id}</Text>
            <Text style={styles.treatmentCost}>{props.treatment.data.costNumber === 0 ? "FREE" : "$".repeat(props.treatment.data.costNumber)}</Text>
            <View style={styles.location}>
              <MapPin width={24} height={24} />
              <Text style={styles.treatmentSubText}>{props.treatment.data.place === "telehealth" ? "Remote" : "In-Clinic"}</Text>
            </View>
            <View style={styles.people}>
              <MapPin width={24} height={24} />
              <Text style={styles.treatmentSubText}>{props.treatment.data.solo === 1 ? "Self-guided" : "Consult with a Physician"}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightHalfOfCard}>
          {imageUrl ? <Image style={styles.placeholderRectangle} source={{ uri: imageUrl }}></Image> : <Text>Image Not Available</Text>}
          <View style={styles.learnMore}>
            <Text style={styles.learnText}> LEARN MORE </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  treatmentContainer: {
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: '2%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // backgroundColor: 'magenta',
  },
  treatmentHeaderContainer: {
    // width: "90%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    // backgroundColor: 'orange',
  },
  treatmentName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    // backgroundColor: 'yellow',
    // paddingTop: 10,
    // paddingLeft: 10,
    // marginBottom: 10,
    // fontWeight: 'bold'
  },
  treatmentSubText: {
    fontSize: 14,
    // paddingTop: 10,
    // paddingLeft: 10,
    // marginBottom: 10,
  },
  treatmentCost: {
    fontSize: 18,
    marginTop: 4,
  },
  treatmentTraitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginBottom: 20,
    // marginLeft: 10,
    borderRadius: 0.5,
    // backgroundColor: 'brown',
    // backgroundColor: 'pink',
  },
  treatmentTrait: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  treatmentInfo: {
    paddingLeft: 10,
  },
  bookmarkContainer: {
    // position: 'absolute',
    // top: 10,
    // right: 15,
    // backgroundColor: 'blue'
  },
  savedText: {
    fontFamily: 'Poppins-Regular',
    // position: 'absolute',
    // top: 15,
    // right: 50,
    // backgroundColor: 'aquamarine',
  },
  placeholderRectangle: {
    backgroundColor: '#000000',
    width: 108,
    height: 106,
  },
  leftHalfOfCard: {
    flexDirection: 'column',
    width: "70%",
    // backgroundColor: 'red',
  },
  rightHalfOfCard: {
    flexDirection: 'column',
    width: "30%",
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  typeAndSave: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    margin: 15,
    fontFamily: 'Poppins-Regular',
    // backgroundColor: 'cyan',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontFamily: 'Poppins-Regular',
    color: '#373737',
    alignItems: 'center',
    marginTop: 2,
    // backgroundColor: 'purple',
  },
  people: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontFamily: 'Poppins-Regular',
    color: '#373737',
    alignItems: 'center',
    marginTop: 2,
    // backgroundColor: 'pink',
  },
  savedSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 15,
    alignItems: 'center',
    // backgroundColor: 'forestgreen',
  },
  learnMore: {
    backgroundColor: '#5451F8',
    width: 108,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 3,
  },
  learnText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF'
  }
})

export default connect(null, { saveTreatment, deleteSavedTreatment })(TreatmentItem); 