import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import SurveyQuestion from '../components/survey-question';
import SurveyIntro from '../components/survey-intro';
import SurveyResult from '../components/survey-result';
import * as Progress from 'react-native-progress';

function SurveyPage(props){
    const windowWidth = Dimensions.get('window').width;
    const [selectedId, setSelectedId] = useState(0); //reference current question
    const [introRef, setIntroRef] = useState(null) //used to reference
    const [questionRef, setQuestionRef] = useState(null) //used to reference flatlist position

    const renderItem = ({ item }) => {
        return (
            <View>
                <SurveyQuestion questionTitle={item.title} press={scrollForward}/>
            </View>
            
        )
    }

    const renderSubmitButton = () => {
        if(selectedId == 8){
            return (
                <TouchableHighlight style={styles.submitButton} onPress={() => introRef.scrollToEnd()}>
                    <Text style={styles.backText}>Submit</Text>
                </TouchableHighlight>
            );
        } else {
            return null;
        }
    }
    const scrollForward = () => {
        if(selectedId < 8){
            setSelectedId(selectedId+1);
        }
    }
    
    const scrollBack = () => {
        if(selectedId > 0){
            setSelectedId(selectedId-1);
        }
    }

    useEffect(() => {
        if(questionRef){
            questionRef.scrollToIndex({index: selectedId})
        }
    }, [selectedId])

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={false} pagingEnabled={true} ref={(ref)=>{setIntroRef(ref)}}>
                <SurveyIntro transition={() => introRef.scrollTo({y: windowHeight})} />
                <View style={styles.survey}>
                    <Text style={styles.title}>PHQ-9 Survey</Text>
                    <Text style={styles.questionIntro} >How often have you been bothered by the following over the past 2 weeks?</Text>
                    <Progress.Bar style={styles.progressBar} progress={selectedId/questionData.length} width={windowWidth} height={20} color="rgb(26,177,147)" borderRadius={0} borderWidth={0}/>
                    <FlatList data={questionData} 
                    ref={(ref)=>{setQuestionRef(ref)}}
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}/>
                    <TouchableHighlight style={styles.backButton} onPress={scrollBack}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableHighlight>
                    {renderSubmitButton()}
                </View>
                <SurveyResult press={() => props.navigation.navigate('Explore')}/>
            </ScrollView>
        </View>
    );
}

const questionData = [
    {
        id: 0,
        title: "Little interest or pleasure in doing things?"
    }, 
    {
        id: 1,
        title: "Feeling down, depressed, or hopeless?"    
    },
    {
        id: 2,
        title: "Trouble falling or staying asleep, or sleeping too much?"    
    },
    {
        id: 3,
        title: "Feeling tired or having little energy?"    
    },
    {
        id: 4,
        title: "Poor appetite or overeating?"    
    },
    {
        id: 5,
        title: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?"    
    },
    {
        id: 6,
        title: "Trouble concentrating on things, such as reading the newspaper or watching television?"    
    },
    {
        id: 7,
        title: "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"    
    },
    {
        id: 8,
        title: "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"    
    },

]
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    survey: {
        paddingTop: 50,
        paddingBottom: 50,
        height: windowHeight,
    },
    questionIntro: {
        marginTop: 15,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'rgb(200,200,200)',
        width: '100%',
        textAlign: 'center',
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
    },
    backButton: {
        position: 'absolute',
        bottom: 130,
        left: 15,
        width: 130,
        height: 50,
        backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    },
    backText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    submitButton: {
        position: 'absolute',
        bottom: 130,
        right: 15,
        width: 130,
        height: 50,
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    }
});

export default SurveyPage;