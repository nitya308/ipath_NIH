import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function TreatmentItemTag(props){
    return(
        <View style={styles.container}>
            {props.icon}
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        marginTop: 10
    },
    text:{
        marginLeft: 3,
        fontWeight: "500"
    }
})

export default TreatmentItemTag; 