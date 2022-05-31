import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import Unchecked from '../assets/icons/unchecked.svg';
import Checked from '../assets/icons/checked.svg';
function Checkbox(props){
    return(
        <Pressable style={styles.container} onPress={props.onPress}>
            {props.isChecked? <Checked /> : <Unchecked />}
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
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
        fontSize: 20,
        color: "#000",
        marginLeft: 10,
        fontWeight: "600",
    },
})
export default Checkbox;