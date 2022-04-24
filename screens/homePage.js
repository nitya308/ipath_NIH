import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePageButton from '../components/homepage-button';


function HomePage(props){
    const navigateTo = (name) => {
        props.navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>iPath</Text>
            <View style={styles.flexContainer}>
            <HomePageButton content="Take Survey" name="Survey" press={navigateTo} />
            <HomePageButton content="View Past Results" name="History" press={navigateTo} />
            <HomePageButton content="Explore Treatments" name="Explore" press={navigateTo} />
            <HomePageButton content="View Additional Resourcses" name="" press={navigateTo} />
            </View>
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

export default HomePage;