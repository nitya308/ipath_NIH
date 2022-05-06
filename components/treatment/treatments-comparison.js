import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, Modal, Pressable } from 'react-native';
import RightArrow from '../../assets/icons/right.svg';

const windowHeight= Dimensions.get('window').height;
const windowWidth= Dimensions.get('window').width;
function TreatmentsComparison(props){
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const [dropdownValue, setDropdownValue] = useState([]);
    // const [selected, setSelected] = useState("efficacy");
    // const [items, setItems] = useState([{
    //     id: 1,
    //     value: {
    //         id: 1,
    //         name: "Watchful Waiting",
    //         cost: "costs of watchful waiting",
    //         efficacy: "efficacy of watchful waiting",
    //         risks: "risks of watcful waiting",
    //     },
    //     label: "Watchful Waiting"
    // },
    // {
    //     id: 2,
    //     value: {
    //         id: 2,
    //         name: "Talk Therapy",
    //         cost: "costs of talk therapy",
    //         efficacy: "efficacy of talk therapy",
    //         risks: "risks of talk therapy",
    //     },
    //     label: "Talk Therapy"
    // },
    // {
    //     id: 3,
    //     value: {
    //         id: 3,
    //         name: "Medication",
    //         cost: "costs of medication",
    //         efficacy: "efficacy of medication",
    //         risks: "risks of medication",
    //     },
    //     label: "Medication"
    // },
    // {
    //     id: 4,
    //     value: {
    //         id: 4,
    //         name: "Talk Therapy + Medication",
    //         cost: "costs of talk therapy + medication",
    //         efficacy: "efficacy of talk therapy + medication",
    //         risks: "risks of talk therapy + medication",
    //     },
    //     label: "Talk Therapy + Medication"
    // }
    // ])
    // const renderInfo = () => {
    //     dropdownValue.map((value) => {
    //         return(
    //             <View>
    //                 <Text>{value.name}</Text>
    //                 <Text>{value[selected]}</Text>
    //             </View>
    //         );
    //     })
    // }
    // return(
    //     <View style={styles.container}>
    //         <Text style={styles.header}>Compare Treatment Types</Text>
    //         <DropDownPicker style={styles.dropdown}
    //         dropDownContainerStyle={styles.dropdownOptions}
    //         containerStyle={styles.dropdownContainer}
    //         items={items}
    //         // uniqueKey="id"
    //         multiple={true}
    //         value={dropdownValue}
    //         min={0}
    //         max={4}
    //         disableBorderRadius={true}
    //         setOpen={setDropdownOpen}
    //         setValue={setDropdownValue}
    //         placeholder="Select Treatments..."
    //         open={dropdownOpen} />
    //         <RadioButtonGroup 
    //         selected={selected}
    //         onSelected={(value) => setSelected(value)}
    //         containerStyle={{
    //             flex: 0,
    //             flexDirection: 'row',
    //             marginTop: 30
    //         }}
    //         radioStyle={{
    //             visbility:'hidden',
    //             borderWidth: 0,
    //             backgroundColor: "transparent",
    //             opacity: 0,
    //             height:0,
    //             width: 0,
    //             margin: 0,
    //             padding: 0
    //         }}>
    //             <RadioButtonItem style={styles.radio}
    //             value="cost" 
    //             label={
    //                 <View style={{...styles.costsLabel, backgroundColor: selected === "cost" ? 'gray' : 'white'}}>
    //                     <Text>COSTS</Text>
    //                 </View>
    //             }    />
    //             <RadioButtonItem style={styles.radio}
    //             value="efficacy" label={
    //                 <View style={{...styles.efficacyLabel, backgroundColor: selected === "efficacy" ? 'gray' : 'white'}}>
    //                     <Text>EFFICACY</Text>
    //                 </View>
    //             }/>
    //             <RadioButtonItem style={styles.radio}
    //             value="risks" label={
    //                 <View style={{ ...styles.risksLabel, backgroundColor: selected === "risks" ? 'gray' : 'white'}}>
    //                         <Text>RISKS</Text>
    //                 </View>
    //             }/>
    //         </RadioButtonGroup>
    //         <View style={styles.infoContainer}>
    //             {dropdownValue.map((value) => {
    //                 return(
    //                 <View>
    //                     <Text style={styles.treatmentSubHeader}>{value.name}</Text>
    //                     <Text style={styles.treatmentSubInfo}>{value[selected]}</Text>
    //                 </View>     
    //                 )
    //             })}
    //         </View>
    //         <TouchableHighlight style={styles.compareButton} onPress={props.scroll}>
    //             <View style={styles.compareButtonContainer}>
    //                 <Text style={styles.compareButtonText}>Compare Treatment Types</Text>
    //                 <RightArrow styles={styles.arrow} />
    //             </View>
    //         </TouchableHighlight>
    //     </View>
    // );
    const [modalOne, setModalOne] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
    const [modalThree, setModalThree] = useState(false);
    const [modalFour, setModalFour] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Compare Treatment Types</Text>
            <TouchableHighlight style={styles.button} onPress={() => setModalOne(true)}>
                <View>
                    <Text style={styles.buttonText}>How much will this cost?</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => setModalTwo(true)}>
                <View>
                    <Text style={styles.buttonText}>Will this work?</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => setModalThree(true)}>
                <View>
                    <Text style={styles.buttonText}>What are the side effects?</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => setModalFour(true)}>
                <View>
                    <Text style={styles.buttonText}>How soon can I access this?</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.compareButton} onPress={() => props.navigation.navigate("Treatments")}>
                <View style={styles.compareButtonContainer}>
                    <Text style={styles.compareButtonText}>Explore Treatment Options</Text>
                    <RightArrow styles={styles.arrow} />
                </View>
            </TouchableHighlight>
            <Modal animationType="slide" visible={modalOne} onRequestClose={() => {setModalOne(!modalOne)}}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>How much will this cost?</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalSubHeader}>Medication</Text>
                        <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that recover without treatment, another 17 out of 100 will recover in 1 month using SSRI medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Therapy</Text>
                        <Text style={styles.modalDescription}>Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
                        <Text style={styles.modalDescription}>Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.</Text>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setModalOne(!modalOne)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal animationType="slide" visible={modalTwo} onRequestClose={() => {setModalTwo(!modalTwo)}}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>Will this work?</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalSubHeader}>Medication</Text>
                        <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that recover without treatment, another 17 out of 100 will recover in 1 month using SSRI medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Therapy</Text>
                        <Text style={styles.modalDescription}>Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
                        <Text style={styles.modalDescription}>Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.</Text>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setModalTwo(!modalTwo)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal animationType="slide" visible={modalThree} onRequestClose={() => {setModalThree(!modalThree)}}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>What are the side effects?</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalSubHeader}>Medication</Text>
                        <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that recover without treatment, another 17 out of 100 will recover in 1 month using SSRI medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Therapy</Text>
                        <Text style={styles.modalDescription}>Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
                        <Text style={styles.modalDescription}>Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.</Text>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setModalThree(!modalThree)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
            <Modal animationType="slide" visible={modalFour} onRequestClose={() => {setModalFour(!modalFour)}}>
                <View style={styles.modalViewContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <Text style={styles.modalHeader}>How soon can I access this?</Text>
                    </View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalSubHeader}>Medication</Text>
                        <Text style={styles.modalDescription}>In addition to the 23 out of 100 people that recover without treatment, another 17 out of 100 will recover in 1 month using SSRI medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Therapy</Text>
                        <Text style={styles.modalDescription}>Prices vary according to pharmacy and insurance plan. Without insurance, prices vary from $5 to $150+ for a 30-day supply of medication.</Text>
                        <View style={styles.divideLine}></View>
                        <Text style={styles.modalSubHeader}>Watchful Waiting</Text>
                        <Text style={styles.modalDescription}>Nausea, diarrhea, and drowsiness each affect up to 17 out of 100 people. Sexual side effects affect up to 13 out of 100. Sweating, shaking, trouble sleeping and dry mouth are less common.</Text>
                    </View>
                    <Pressable style={styles.closeModal} onPress={() => {setModalFour(!modalFour)}}>
                        <Text style={styles.closeModalIcon}>X</Text>
                    </Pressable>
                </View>
            </Modal>
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
    button:{
        width: 311,
        height: 50,
        backgroundColor: '#E3EFF0',
        borderRadius: 25,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    modalViewContainer:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: windowWidth,
        marginTop: windowHeight * .05,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalContainer: {
        width: '90%',
        marginTop: 30,
        alignSelf: 'center',
    },
    modalHeaderContainer:{
        flex: 0,
        backgroundColor: '#E3EFF0',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: 125
    },
    modalHeader:{
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalDescription:{
        fontSize: 20
    },
    modalSubHeader:{
        fontSize: 20,
        fontWeight: 'bold',
    },  
    divideLine:{
        height: 2,
        width: '100%',
        backgroundColor: '#469C97',
        alignSelf: 'center',
        margin: 20
    },
    closeModal: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeModalIcon:{
        fontSize: 25
    },
    // dropdown:{
    //     borderWidth: 0,
    //     width: '90%',
    // },
    // dropdownOptions:{
    //     borderWidth: 0,
    //     width:'90%',
    // },
    // dropdownContainer: {
    //     marginTop: 50,
    //     flex: 0,
    //     alignItems: 'center'
    // },
    // radio: {
    //     margin: 0,
    //     padding: 0
    // },
    // costsLabel:{
    //     flex: 0,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 100, 
    //     height: 40,
    //     borderTopLeftRadius: 8,
    //     borderBottomLeftRadius: 8,
    //     backgroundColor: 'red',
    //     margin: 0, 
    //     marginLeft: 0
    // },
    // efficacyLabel:{
    //     flex: 0,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 100,
    //     height: 40,
    //     margin:0,
    //     marginLeft: 0
    // },
    // risksLabel:{
    //     flex: 0,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 100, 
    //     height: 40,
    //     borderTopRightRadius: 8,
    //     borderBottomRightRadius: 8,
    //     // backgroundColor: 'red',
    //     margin: 0, 
    //     marginLeft: 0
    // },
    // infoContainer:{
    //     width: '95%',
    //     flex: 0,
    //     alignItems: 'flex-start',
    // },
    // treatmentSubHeader:{
    //     fontSize: 23,
    //     fontWeight: 'bold',
    //     marginBottom: 10,
    //     marginTop: 20
    // },  
    // treatmentSubInfo: {
    //     fontSize: 20
    // },
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