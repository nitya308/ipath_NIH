import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import DropDownPicker from 'react-native-dropdown-picker';
import RightArrow from '../../assets/icons/right.svg';


const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsComparison(props){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState([]);
    const [selected, setSelected] = useState("efficacy");
    const [items, setItems] = useState([{
        id: 1,
        value: {
            id: 1,
            name: "Watchful Waiting",
            cost: "costs of watchful waiting",
            efficacy: "efficacy of watchful waiting",
            risks: "risks of watcful waiting",
        },
        label: "Watchful Waiting"
    },
    {
        id: 2,
        value: {
            id: 2,
            name: "Talk Therapy",
            cost: "costs of talk therapy",
            efficacy: "efficacy of talk therapy",
            risks: "risks of talk therapy",
        },
        label: "Talk Therapy"
    },
    {
        id: 3,
        value: {
            id: 3,
            name: "Medication",
            cost: "costs of medication",
            efficacy: "efficacy of medication",
            risks: "risks of medication",
        },
        label: "Medication"
    },
    {
        id: 4,
        value: {
            id: 4,
            name: "Talk Therapy + Medication",
            cost: "costs of talk therapy + medication",
            efficacy: "efficacy of talk therapy + medication",
            risks: "risks of talk therapy + medication",
        },
        label: "Talk Therapy + Medication"
    }
    ])
    const renderInfo = () => {
        dropdownValue.map((value) => {
            return(
                <View>
                    <Text>{value.name}</Text>
                    <Text>{value[selected]}</Text>
                </View>
            );
        })
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Compare Treatment Types</Text>
            <DropDownPicker style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownOptions}
            containerStyle={styles.dropdownContainer}
            items={items}
            // uniqueKey="id"
            multiple={true}
            value={dropdownValue}
            min={0}
            max={4}
            disableBorderRadius={true}
            setOpen={setDropdownOpen}
            setValue={setDropdownValue}
            placeholder="Select Treatments..."
            open={dropdownOpen} />
            <RadioButtonGroup 
            selected={selected}
            onSelected={(value) => setSelected(value)}
            containerStyle={{
                flex: 0,
                flexDirection: 'row',
                marginTop: 30
            }}
            radioStyle={{
                visbility:'hidden',
                borderWidth: 0,
                backgroundColor: "transparent",
                opacity: 0,
                height:0,
                width: 0,
                margin: 0,
                padding: 0
            }}>
                <RadioButtonItem style={styles.radio}
                value="cost" 
                label={
                    <View style={{...styles.costsLabel, backgroundColor: selected === "cost" ? 'gray' : 'white'}}>
                        <Text>COSTS</Text>
                    </View>
                }    />
                <RadioButtonItem style={styles.radio}
                value="efficacy" label={
                    <View style={{...styles.efficacyLabel, backgroundColor: selected === "efficacy" ? 'gray' : 'white'}}>
                        <Text>EFFICACY</Text>
                    </View>
                }/>
                <RadioButtonItem style={styles.radio}
                value="risks" label={
                    <View style={{ ...styles.risksLabel, backgroundColor: selected === "risks" ? 'gray' : 'white'}}>
                            <Text>RISKS</Text>
                    </View>
                }/>
            </RadioButtonGroup>
            <View style={styles.infoContainer}>
                {dropdownValue.map((value) => {
                    return(
                    <View>
                        <Text style={styles.treatmentSubHeader}>{value.name}</Text>
                        <Text style={styles.treatmentSubInfo}>{value[selected]}</Text>
                    </View>     
                    )
                })}
            </View>
            <TouchableHighlight style={styles.compareButton} onPress={props.scroll}>
                <View style={styles.compareButtonContainer}>
                    <Text style={styles.compareButtonText}>Compare Treatment Types</Text>
                    <RightArrow styles={styles.arrow} />
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 10,
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
    },
    radio: {
        margin: 0,
        padding: 0
    },
    costsLabel:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, 
        height: 40,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: 'red',
        margin: 0, 
        marginLeft: 0
    },
    efficacyLabel:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        margin:0,
        marginLeft: 0
    },
    risksLabel:{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, 
        height: 40,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        // backgroundColor: 'red',
        margin: 0, 
        marginLeft: 0
    },
    infoContainer:{
        width: '95%',
        flex: 0,
        alignItems: 'flex-start',
    },
    treatmentSubHeader:{
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },  
    treatmentSubInfo: {
        fontSize: 20
    },
    compareButton: {
        position: 'absolute',
        bottom: '5%',
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
})
export default TreatmentsComparison