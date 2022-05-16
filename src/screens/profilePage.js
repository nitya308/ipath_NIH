import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import Bookmark from '../assets/icons/bookmark.svg';
import Notifications from '../components/profile/notifications';
import SavedTreatments from '../components/profile/saved-treatments';
import VariablePage from '../navigation/variable-page';
function ProfilePage(props){
    const [nextPage, setNextPage] = useState(0);
    const [scrollRef, setScrollRef] = useState(null);

    const scroll = () => {
        if(scrollRef){
            scrollRef.scrollToEnd();
        }
    }
    return (
        <ScrollView horizontal={true} pagingEnabled={true} ref={(ref) => {setScrollRef(ref)}}>
            <View style={styles.container}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.email}>name@gmail.com</Text>
                <TouchableHighlight underlayColor="gray" style={styles.touchable} onPress={() => {setNextPage(1); scroll()}}>
                    <View style={styles.button}>
                        <Bookmark style={styles.icon}/>
                        <Text style={styles.buttonText}>Saved Treatments</Text>
                    </View>
                </TouchableHighlight >
                <TouchableHighlight underlayColor="gray" style={styles.touchable} onPress={() => {setNextPage(2); scroll();}} >
                    <View style={styles.button}>
                        <Bookmark style={styles.icon}/>
                        <Text style={styles.buttonText}>Notifications</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="gray" style={styles.touchable}>
                    <View style={styles.button}>
                        <Bookmark style={styles.icon}/>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                {nextPage === 1? <SavedTreatments /> : nextPage === 2? <Notifications/ > : null}
            </View>
        </ScrollView>
    );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        width: windowWidth,
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
    touchable: {
        height: 48,
        width: 311,
        marginTop: 20,
        borderRadius: 10
    },
    button: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#E3EFF0',
        height: 48,
        width: 311,
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