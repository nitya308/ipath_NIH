import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import Bookmark from '../assets/icons/bookmark.svg';

function ProfilePage(props){
    const navigateTo = (name) => {
        props.navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.email}>name@gmail.com</Text>
            <TouchableHighlight>
                <View style={styles.button}>
                    <Bookmark style={styles.icon}/>
                    <Text style={styles.buttonText}>Saved Treatments</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
            <View style={styles.button}>
                    <Bookmark style={styles.icon}/>
                    <Text style={styles.buttonText}>Notifications</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
            <View style={styles.button}>
                    <Bookmark style={styles.icon}/>
                    <Text style={styles.buttonText}>Log Out</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        marginTop: 10,
        flex: 1,
        alignItems: 'center'
    }, 
    name:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30
    },
    email:{
        marginTop: 10,
        fontStyle: 'italic',
        fontSize: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    description: {
        fontStyle: 'italic',
        fontSize: 18,
        padding: 15
    },
    button: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#E3EFF0',
        height: 48,
        width: 311,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    icon: {
        marginLeft: 20
    },
    buttonText:{
        fontWeight: 'bold',
        marginLeft: 20
    },
});


export default ProfilePage;