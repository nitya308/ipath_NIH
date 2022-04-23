import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import SurveyQuestion from '../components/survey-question';

function Survey(props){
    const [selectedId, setSelectedId] = useState(0); //reference current question
    const [ref, setRef] = useState(null) //used to reference flatlist position
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
    const styles = StyleSheet.create({
        container: {
            margin: 0,
            padding: 0,
            marginTop: 70,
            flex: 1
        }, 
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
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
            bottom: 15,
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
        }
    });

    const renderItem = ({ item }) => {
        return <SurveyQuestion questionTitle={item.title} press={scrollForward}/>
    }

    const scrollForward = () => {
        if(selectedId < 8){
            setSelectedId(selectedId+1);
        }
    }
    
    const scrollBack = () => {
        if(selectedId > 0){
            setSelectedId(selectedId-1);
            // ref.scrollToIndex({index: selectedId});
        }
    }

    useEffect(() => {
        if(ref){
            ref.scrollToIndex({index: selectedId})
        }
    }, [selectedId])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PHQ-9 Survey</Text>
            <Text style={styles.questionIntro} >How often have you been bothered by the following over the past 2 weeks?</Text>
            <FlatList data={questionData} 
            ref={(ref)=>{setRef(ref)}}
            renderItem={renderItem} 
            keyExtractor={(item) => item.id}
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={true}/>
            <TouchableHighlight style={styles.backButton} onPress={scrollBack}>
                <Text style={styles.backText}>Back</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Survey;