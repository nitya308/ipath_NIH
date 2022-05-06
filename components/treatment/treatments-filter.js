import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TouchableHighlight, Dimensions} from 'react-native';
import RightArrow from '../../assets/icons/right.svg';
import Filter from '../../assets/icons/filter.svg';

function TreatmentsFilter(props){
    const [therapyChecked, setTherapyChecked] = useState(false);
    const [medicationChecked, setMedicationChecked] = useState(false);
    const [comboChecked, setComboChecked] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Filter Treatments</Text>
            <Filter />
            {/* <CheckBox />
            <CheckBox />
            <CheckBox /> */}
            <TouchableHighlight style={styles.compareButton} onPress={props.scroll}>
                <View style={styles.compareButtonContainer}>
                    <Text style={styles.compareButtonText}>Compare Treatment Types</Text>
                    <RightArrow styles={styles.arrow} />
                </View>
            </TouchableHighlight>
        </View>
    );
}
const windowWidth= Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 0,
        padding: 0,
        width: windowWidth,
        alignItems: 'center'
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    compareButton: {
        width: '95%',
        height: '10%',
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
    compareButtonContainer: {
        width: '95%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    compareButtonText: {
        fontSize: 20,
    },
});
export default TreatmentsFilter
