import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LoginPage({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Username</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        marginTop: 70
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    flexContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 20,
    },
    button: {
        height: 150,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        margin: 8,
    },
    buttonContent: {
        textAlign: 'center',
        padding: 15,
        paddingTop: 20,
        fontSize: 20
    }
});

export default LoginPage;