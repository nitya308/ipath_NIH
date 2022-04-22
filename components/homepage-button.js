import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import RightArrow from '../assets/icons/right.svg';

function HomePageButton(props){
    const styles = StyleSheet.create({
        touchContainer: {
            height: 150, 
            width: 150,
            borderRadius: 10,
            backgroundColor: 'skyblue',
            margin: 8
        }, 
        container: {
            height: 150, 
            width: 150,
            borderRadius: 10,
            backgroundColor: 'skyblue',
        }, 
        content: {
            textAlign: 'center',
            padding: 15,
            paddingTop: 20,
            fontSize: 20
        },
        arrow: {
            position: 'absolute',
            bottom: 5,
            right: 5,
        }
    });
    
    const sendPageName = () => {
        props.press(props.name);
    }

    return (
    <TouchableHighlight style={styles.touchContainer} underlayColor='gray' onPress={sendPageName}>
        <View style={styles.container}>
            <Text style={styles.content}>{props.content}</Text>
            <RightArrow style={styles.arrow}/>
        </View>
    </TouchableHighlight>
    );
}

export default HomePageButton;