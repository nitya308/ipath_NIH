import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Profile from '../assets/icons/profile.svg';

function ProfileButton(props){
    
    return(
        <TouchableHighlight style={styles.container} onPress={props.navigate}>
            <Profile />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    }
})
export default ProfileButton;