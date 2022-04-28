import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const items = [{
    value: 0,
    label: "Watchful Waiting"
}, 
{
    value: 1,
    label: "Talk Therapy"
},
{
    value: 2,
    label: "Medication"
},
{
    value: 3,
    label: "Talk Therapy + Medication"
}
]

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsComparison(props){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState([]);
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Compare Treatment Types</Text>
            <DropDownPicker style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownOptions}
            containerStyle={styles.dropdownContainer}
            items={items}
            uniqueKey="id"
            multiple={true}
            value={dropdownValue}
            min={0}
            max={4}
            disableBorderRadius={true}
            setOpen={setDropdownOpen}
            setValue={setDropdownValue}
            placeholder="Select Treatments..."
            open={dropdownOpen} />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
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
    dropdown:{
        borderWidth: 0,
        width: '90%',
    },
    dropdownOptions:{
        borderWidth: 0,
        width:'90%',
    },
    dropdownContainer: {
        marginTop: 50,
        flex: 0,
        alignItems: 'center'
    }
})
export default TreatmentsComparison