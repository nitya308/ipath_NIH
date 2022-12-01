import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView } from 'react-native';
import { connect, useSelector } from 'react-redux';
import Left from '../../assets/icons/left';
import Bookmark from '../../assets/icons/bookmark';
import CheckMark from '../../assets/icons/check';
import { saveTreatment, deleteSavedTreatment } from '../../actions/index';


const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentInfo(props){
    const savedTreatments = useSelector((state) => state.treatments.savedTreatments);
    const user = useSelector((state) => state.user);
    function calcType(){
        switch (props.treatment.data.type){
            case "Medication/Therapy": 
                return (
                    <View style={{flexDirection: 'row', width: "75%", justifyContent: 'space-around'}}>
                        <View style={styles.trait}>
                            <CheckMark width={30} height={30} strokeColor="#469C97" />
                            <Text style={styles.typeText}>Medication</Text>
                        </View>
                        <View style={styles.trait}>
                            <CheckMark width={30} height={30} strokeColor="#469C97" />
                            <Text style={styles.typeText}>Therapy</Text>
                        </View>
                    </View>
                )         
            case "Watchful Waiting": 
                return (
                    <View style={styles.trait}>
                        <CheckMark width={30} height={30} strokeColor="#469C97" />
                        <Text style={styles.typeText}>Watchful Waiting</Text>
                    </View>
                )
            case "Medication":
                return (
                    <View style={styles.trait}>
                        <CheckMark width={30} height={30} strokeColor="#469C97" />
                        <Text style={styles.typeText}>Medication</Text>
                    </View>
                )
            case "Therapy":
                return (
                    <View style={styles.trait}>
                        <CheckMark width={30} height={30} strokeColor="#469C97" />
                        <Text style={styles.typeText}>Therapy</Text>
                    </View>
                )
            default:
                return null;
        }
    }

    if(props.treatment){
        return(
            <View style={styles.container}>
                <Pressable style={styles.backButton} onPress={props.press}>
                    <Left width={30} height={30} strokeColor="black"/>
                </Pressable>
                <View style={styles.header}>
                    <Text style={styles.headerName}>{props.treatment.id}</Text>
                    <View style={styles.bookmarkContainer}>
                        <Bookmark width="30" height="30" strokeColor="black" press={() => {savedTreatments.includes(props.treatment.id)? props.deleteSavedTreatment(user.userId, props.treatment.id) : props.saveTreatment(user.userId, props.treatment.id)}}
                        fill={savedTreatments.includes(props.treatment.id)? "black" : "none"}/>
                        <Text style={{fontSize: 18, marginLeft: 10}}>{savedTreatments.includes(props.treatment.id)? "Saved" : "Save Treatment"}</Text>
                    </View>
                    <View style={styles.typeContainer}>
                        {calcType()}
                    </View>
                </View>
                <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.subheader}>Contact</Text>
                    <Text style={styles.description}>{props.treatment.data.link}</Text>
                    <View style={styles.line} />
                    <Text style={styles.subheader}>About us</Text>
                    <Text style={styles.description}>{props.treatment.data.desc}</Text>
                    <View style={styles.line} />
                    <Text style={styles.subheader}>Wait time</Text>
                    <Text style={styles.description}>{props.treatment.data.wait}</Text>
                    <View style={styles.line} />
                    <Text style={styles.subheader}>Cost</Text>
                    <Text style={styles.description}>{props.treatment.data.cost}</Text>
                    <View style={styles.line} />
                </ScrollView>
            </View>
        );
    } else {
        return <Text style={styles.container}>Loading...</Text>
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        height: windowHeight * .8,
        width: windowWidth,
    },
    header:{
        flex: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#E3EFF0',
    },
    headerName: {
        fontSize: 27,
        fontWeight: '500',
        textAlign: 'center',
        padding: 30
    },
    bookmarkContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typeContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },  
    typeText:{
        fontSize: 20,
        fontWeight: '500',
    },  
    contentContainer:{
        paddingTop: 20,
        width: "80%",
        paddingBottom: 100
    },  
    subheader:{
        fontSize: 20,
        fontWeight: 'bold',
    },      
    description: {
        fontSize: 20,
        marginTop: 10
    },
    trait:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    backButton:{
        position:'absolute',
        top: 20, 
        left: 12,
        zIndex: 100
    }, 
    line:{
        backgroundColor: '#469C97',
        height: 2,
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    }
})
export default connect(null, { saveTreatment, deleteSavedTreatment })(TreatmentInfo);