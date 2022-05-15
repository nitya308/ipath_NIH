import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import SurveyQuestion from '../components/survey/survey-question';
import SurveyIntro from '../components/survey/survey-intro';
import SurveyResult from '../components/survey/survey-result';
import * as Progress from 'react-native-progress';
import { addSurveyRes } from '../services/datastore';

function SurveyPage(props){
    const windowWidth = Dimensions.get('window').width;

    const scoresArray = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    const [selAns, setSelAns] = useState(-1);
    const [scores, setScore] = useState(scoresArray); // array of scores scores stored here
    const [selectedId, setSelectedId] = useState(0); //reference current question
    const [introRef, setIntroRef] = useState(null) 
    const [questionRef, setQuestionRef] = useState(null) //used to reference flatlist position

    const renderItem = ({ item }) => {
        return (
            <View>
                <SurveyQuestion questionTitle={item.title} press={scrollForward} set0={add0} set1={add1} set2={add2} set3={add3} selAns={selAns}/>
            </View>
        )
    }

    const renderSubmitButton = () => {
        if(selectedId == 8){
            return (
                <TouchableHighlight style={styles.submitButton} onPress={() => {console.log("submitted"); addSurveyRes("users/test-username", scores, new Date()); introRef.scrollToEnd()}}>
                    <Text style={styles.backText}>Submit</Text>
                </TouchableHighlight>
            );
        } else {
            return(
                <View style={styles.progressContainer}>
                    <Progress.Bar style={styles.progressBar} progress={selectedId/questionData.length} width={65} height={10} color="rgb(26,177,147)" unfilledColor="lightgray" borderRadius={5} borderWidth={0}/>
                    <Text style={styles.progressNumber}>{selectedId}/9</Text>
                </View>
            );
        }
    }

    const add0 = () => {
      scores[selectedId] = 0;
      setScore(scores);
      setSelAns(0);
    };

    const add1 = () => {
      scores[selectedId] = 1;
      setScore(scores);
      setSelAns(1);
    };

    const add2 = () => {
      scores[selectedId] = 2;
      setScore(scores);
      setSelAns(2);
    };

    const add3 = () => {
      scores[selectedId] = 3;
      setScore(scores);
      setSelAns(3);
    };

    const scrollForward = () => {
        if(selectedId < 8){
            setSelectedId(selectedId+1);
            setSelAns(scores[selectedId+1]);
        }
    };
    
    const scrollBack = () => {
        if(selectedId > 0){
            setSelectedId(selectedId-1);
        }
        setSelAns(scores[selectedId-1]);
    };

    useEffect(() => {
        if(questionRef){
            questionRef.scrollToIndex({index: selectedId})
        }
    }, [selectedId])

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={false} pagingEnabled={true} ref={(ref)=>{setIntroRef(ref)}}>
                <SurveyIntro transition={() => introRef.scrollTo({y: windowHeight * .8})} />
                <View style={styles.survey}>
                    <Text style={styles.title}>PHQ-9 Survey</Text>
                    <Text style={styles.questionIntro} >How often have you been bothered by the following over the past 2 weeks?</Text>
                    <FlatList data={questionData} 
                    scores = {setScore}
                    ref={(ref)=>{setQuestionRef(ref)}}
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={true}/>
                    <TouchableHighlight style={styles.backButton} onPress={scrollBack}>
                        <Text style={styles.backText}>Previous Question</Text>
                    </TouchableHighlight>
                    {renderSubmitButton()}
                </View>
                <SurveyResult scores={scores} press={() => props.navigation.navigate('Learn')}/>
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
        backgroundColor: 'white'
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    survey: {
        paddingTop: 20,
        height: windowHeight * .8,
    },
    questionIntro: {
        marginTop: 15,
        padding: 10,
        fontSize: 20,
        alignSelf: 'center',
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
        // height: 150,
        // width: 150,
        borderRadius: 10,
        backgroundColor: '#72CCD4',
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
        bottom: 30,
        left: 15,
        width: 200,
        height: 50,
        backgroundColor: '#72CCD4',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 25
    },
    backText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    submitButton: {
        position: 'absolute',
        bottom: 30,
        right: 15,
        width: 130,
        height: 50,
        backgroundColor: '#72CCD4',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 25
    },
    progressContainer:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 20,
    },
    progressBar: {
        height: 10
    },
    progressNumber:{
        color: 'black',
        padding: 10
    }
});

export default SurveyPage;