import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
function SavedTreatments(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Saved Treatments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    },
})
export default SavedTreatments;