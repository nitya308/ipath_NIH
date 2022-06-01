import React from 'react';
import { useSelector, connect } from 'react-redux';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Bookmark from '../../assets/icons/bookmark';
import CheckMark from '../../assets/icons/check.js';
import MapPin from '../../assets/icons/mapPin';
import Pill from '../../assets/icons/pill';
import Speech from '../../assets/icons/speech';
import Watch from '../../assets/icons/watch';
import { saveTreatment, deleteSavedTreatment } from '../../actions/index';
import { addClick } from '../../services/datastore';

import TreatmentItemTag from './treatment-item-tag';

function TreatmentItem(props){
    // const dispatch = useDispatch(); 
    const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
    const user = useSelector((state) => state.user)
    function calcTypeTag(type){
        switch (type){
            case "Medication/Therapy": 
                return (
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <TreatmentItemTag icon={<Pill width={20} height={20}/>} title="Medication"/>
                        <TreatmentItemTag icon={<Speech width={18} height={18}/>} title="Talk Therapy"/>
                    </View>
                )         
            case "Watchful Waiting": 
                return <TreatmentItemTag icon={<Watch width={20} height={20} />} title="Watchful Waiting"/>;
            case "Medication":
                return <TreatmentItemTag icon={<Pill width={20} height={20}/>} title="Medication"/>;
            case "Therapy":
                return <TreatmentItemTag icon={<Speech width={18} height={18} />} title="Talk Therapy" />;
            default:
                return null;
        }
    }
    return(
        <TouchableHighlight underlayColor="gray" style={styles.treatmentContainer} onPress={props.press}>
            <View>
                <View style={styles.treatmentHeaderContainer}>
                    <Text style={styles.treatmentName}>{props.treatment.id}</Text>
                    <Text style={styles.treatmentCost}>{props.treatment.data.costNumber === 0 ? "FREE" : "$".repeat(props.treatment.data.costNumber)}</Text>
                </View>
                <Text style={styles.treatmentBlurb}>{props.treatment.data.blurb}</Text>
                <View style={styles.treatmentTraitContainer}>
                    {calcTypeTag(props.treatment.data.type)}
                    {
                        props.treatment.data.place === "telehealth" ? 
                        <TreatmentItemTag icon={<MapPin width={24} height={24}/>} title="Telehealth" />
                        :
                        <TreatmentItemTag icon={<MapPin width={24} height={24}/>} title="In-Person" />
                    }
                    {
                        props.treatment.data.insurance === true ? 
                        <TreatmentItemTag icon={<CheckMark width={24} height={24} strokeColor="black"/>} title="Takes Insurance" />
                        :
                        null
                    }
                    {
                        props.treatment.data.quickAccess === true ? 
                        <TreatmentItemTag icon={<CheckMark width={24} height={24} strokeColor="black"/>} title="Quick Access" />
                        :
                        null
                    }
                </View>
                <View style={styles.bookmarkContainer}>
                    <Bookmark width="30" height="30" treatment={props.treatment} press={() => {savedTreatments.includes(props.treatment.id) ? (props.deleteSavedTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "Unsaved " + props.treatment.id, new Date())) : (props.saveTreatment(user.userId, props.treatment.id), addClick(`users/${user.userId}`, "saved " + props.treatment.id, new Date()))}}
                 fill={savedTreatments.includes(props.treatment.id)? "black" : "none"} strokeColor="black"/>
                </View>
                {
                    savedTreatments.includes(props.treatment.id) ? 
                    <Text style={styles.savedText}>Saved</Text>
                    :
                    <Text style={styles.savedText}>Save</Text>
                }
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    treatmentContainer:{
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
    treatmentHeaderContainer:{
        width: "70%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 5
    },
    treatmentName: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    treatmentCost: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 10,
    },
    treatmentBlurb:{
        fontSize: 15,
        fontStyle: 'italic',
        marginLeft: 15,
        marginTop: 10
    },
    treatmentTraitContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        marginLeft: 10,
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
    bookmarkContainer:{
        position: 'absolute',
        top: 10,
        right: 15,
    },
    savedText: {
        position: 'absolute',
        top: 15,
        right: 50
    }
})

export default connect(null, { saveTreatment, deleteSavedTreatment })(TreatmentItem); 