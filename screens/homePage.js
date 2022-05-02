import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
// import HomePageButton from '../components/homepage/homepage-button';


function HomePage(props){
    const navigateTo = (name) => {
        props.navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to iPath</Text>
            <Text style={styles.description}>iPath is a decision aid tool funded by the NCI. iPath aims to support cancer patients displaying symptoms of depression by helping them find the best treatment option for them.</Text>
            <View style={styles.flexContainer}>
            <TouchableHighlight style={styles.surveyTouchContainer} underlayColor='gray' onPress={() => navigateTo("Survey")}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Take PHQ-9 Depression Screening Survey</Text>
                    {/* <RightArrow style={styles.ar?row}/> */}
                </View>
            </TouchableHighlight>
            <View style={styles.parallelButtons}>
                <TouchableHighlight style={styles.mediumTouchContainer} underlayColor='gray' onPress={() => navigateTo("History")}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>View My History</Text>
                        {/* <RightArrow style={styles.ar?row}/> */}
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.mediumTouchContainer} underlayColor='gray' onPress={() => navigateTo("Explore")}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonTitle}>Explore Treatments</Text>
                        {/* <RightArrow style={styles.ar?row}/> */}
                    </View>
                </TouchableHighlight>
            </View>
            {/* <HomePageButton content="Take Survey" name="Survey" press={navigateTo} />
            <HomePageButton content="View Past Results" name="History" press={navigateTo} />
            <HomePageButton content="Explore Treatments" name="Explore" press={navigateTo} />
            <HomePageButton content="View Additional Resourcses" name="" press={navigateTo} /> */}
            </View>
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
    flexContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 20,
        width: windowWidth * .8
    },
    parallelButtons:{
      flex: 0,
      width: '100%',
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between'
    },
    surveyTouchContainer:{
        width: '100%',
        backgroundColor: 'gray',
        height: 130,
        borderRadius: 10
    },
    mediumTouchContainer:{
        width: '48%',
        backgroundColor: 'gray',
        height: 130,
        borderRadius: 10,
    },
    buttonContainer:{
      width: '95%' 
    },
    buttonTitle: {
        fontSize: 20,
        color: 'white',
        padding: 15
    },
});

// const styles = StyleSheet.create({
//     container: {
//         margin: 0,
//         padding: 0,
//         marginTop: 70
//     }, 
//     title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 20,
//     },
//     flexContainer: {
//         flex: 1, 
//         flexDirection: 'row',
//         justifyContent: 'center', 
//         flexWrap: 'wrap',
//         marginTop: 20,
//     },
//     button: {
//         height: 150,
//         width: 150,
//         borderRadius: 10,
//         backgroundColor: 'skyblue',
//         margin: 8,
//     },
//     buttonContent: {
//         textAlign: 'center',
//         padding: 15,
//         paddingTop: 20,
//         fontSize: 20
//     }
// });


export default HomePage;