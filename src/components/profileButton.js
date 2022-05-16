import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Profile from '../assets/icons/profile.svg';

function ProfileButton(props){
    
    return(
        <TouchableHighlight underlayColor="gray" style={styles.container} onPress={props.navigate}>
            <Profile />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        borderRadius: 10,
    }
})
export default ProfileButton;