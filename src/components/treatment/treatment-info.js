import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import CheckMark from '../../assets/icons/check.svg';
import MapPin from '../../assets/icons/mapPin.svg';
import Bookmark from '../../assets/icons/bookmark';
import Left from '../../assets/icons/left.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentInfo(props){
    const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
    var tempSet = new Set(savedTreatments);
    if(props.treatment){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={props.press}>
                        <Left />
                    </Pressable>
                    <Text style={styles.headerName}>{props.treatment.id}</Text>
                    <Bookmark width="30" height="30" strokeColor="black" fill={savedTreatments.includes(props.treatment.id)? "black" : "none"}/>
                </View>
                <View style={styles.traits}>
                    <View style={styles.overview}>
                        <Text style={styles.typeTrait}>{props.treatment.data.type}</Text>
                        <Text style={styles.typeTrait}>Medication</Text>
                    </View>
                    <Text style={styles.cost}>Cost: {"$".repeat(props.treatment.data.cost)}</Text>
                    <View style={styles.trait}>
                        <MapPin />
                    </View>
                    <View style={styles.trait}>
                        <CheckMark />
                        <Text style={styles.traitText}>{props.treatment.data.insurance}</Text>
                    </View>
                    <View style={styles.trait}>
                        <CheckMark />
                        <Text style={styles.traitText}>{props.treatment.data.time}</Text>
                    </View>
                </View>
            </View>
        );
    } else {
        return <Text style={styles.container}>Loading...</Text>
    }
}
const styles = StyleSheet.create({
    header:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
        width: '90%',
    },
    headerName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
        width: windowWidth,
    },
    overview:{
        flex: 0,
        flexDirection: 'row',
        margin: 10
    },
    traits:{
        flex: 0,
        alignItems: 'flex-start',
    },
    cost:{
        fontSize: 22,
        marginBottom: 30,
        marginLeft: 30,
    },
    trait:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginBottom: 20
    },
    typeTrait:{
        margin: 20,
        fontSize: 25
    },
    traitText: {
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'center'
    },
    backButton:{
    }
})
export default TreatmentInfo