import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import Unchecked from '../assets/icons/unchecked.svg';
import Checked from '../assets/icons/checked.svg';
function Checkbox(props){
    return(
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                {props.isChecked? <Checked /> : <Unchecked />}
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: '100%'
    },
    title: {
        fontSize: 16,
        color: "#000",
        marginLeft: 5,
        fontWeight: "600",
    },
})
export default Checkbox;