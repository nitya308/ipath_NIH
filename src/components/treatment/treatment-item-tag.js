import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function TreatmentItemTag(props){
    return(
        <View style={styles.container}>
            {props.icon}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 30,
        width: 45,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginRight: 5,
        // marginTop: 10
    },
})

export default TreatmentItemTag; 