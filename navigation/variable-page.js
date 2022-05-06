import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Notifications from '../components/profile/notifications';
import SavedTreatments from '../components/profile/saved-treatments';

function VariablePage(props){
    return(
        <View style={styles.container}>
            <Notifications style={props.option? {} : {width: 0, height:0, opacity: 0}}/>
            <SavedTreatments style={props.option? {width: 0, height:0, opacity: 0} : {}}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default VariablePage;