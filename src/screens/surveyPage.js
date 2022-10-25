import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import SurveyQuestion from '../components/survey/survey-question';
import SurveyIntro from '../components/survey/survey-intro';
import SurveyResult from '../components/survey/survey-result';
import * as Progress from 'react-native-progress';
import { addSurveyRes, updateLastSurveyed } from '../services/datastore';
import { useScrollToTop, useIsFocused } from '@react-navigation/native';
import { schedulePushNotification, registerForPushNotificationsAsync, cancelPushNotifications, surveyFinishedReminder } from '../../notifications';
import Left from '../assets/icons/left';
import { AppState } from 'react-native';
import { addEventListener } from 'expo-linking';
import { saveLastSurveyed } from '../actions';

function SurveyPage(props) {
  const windowWidth = Dimensions.get('window').width;
  const introRef = useRef(null);
  const questionRef = useRef(null);

  const isFocused = useIsFocused();
  const user = useSelector((state) => state.user);

  const [hotline, setHotline] = useState(false);
  const scoresArray = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  const [selAns, setSelAns] = useState(-1);
  const [numAnswered, setNumAnswered] = useState(0);
  const [scores, setScore] = useState(scoresArray); // array of scores scores stored here
  const [selectedId, setSelectedId] = useState(0); //reference current question
  const [controlsVisible, setControlsVisible] = useState(false)
  useEffect(() => {
    setScore(scoresArray);
    setSelectedId(0);
    setNumAnswered(0);
    setSelAns(-1);
    setControlsVisible(false);
  }, [isFocused]);

  // CHANGE: NAVIGATE HOME
  const handleAppStateChange = () => {
    if (AppState.currentState.match(/inactive|background/)) {
      props.navigation.navigate('Home');
    }
  }

  // CHANGE: LISTEN FOR APP STATE CHANGE
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
  })

  useScrollToTop(useRef({
    scrollToTop: () => {
      introRef.current?.scrollTo({ y: 0, animated: false });
      questionRef.current?.scrollTo({ x: 0, x: 0, animated: false });
    },
  }));

  const renderSubmitButton = () => {
    if (controlsVisible) {
      if (selectedId == 8 && numAnswered == 9) {
        return (
          <TouchableHighlight underlayColor="gray" style={styles.submitButton} onPress={() => { addSurveyRes(`${user.userId}`, scores, new Date()); updateLastSurveyed(`${user.userId}`, new Date()); introRef.current.scrollToEnd(); setControlsVisible(false); cancelPushNotifications(); schedulePushNotification(); }}>
            <Text style={styles.backText}>Submit</Text>
          </TouchableHighlight>
        );
      } else {
        return (
          <View style={styles.progressContainer}>
            <Progress.Bar style={styles.progressBar} progress={selectedId / questionData.length} width={65} height={10} color='#469C97' unfilledColor="lightgray" borderRadius={5} borderWidth={0} />
            <Text style={styles.progressNumber}>{selectedId}/9</Text>
          </View>
        );
      }
    }
  }

  const renderBackButton = () => {
    if (selectedId != 0 && controlsVisible) {
      return (
        <TouchableHighlight underlayColor="gray" style={styles.backButton} onPress={scrollBack}>
          <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '90%' }}>
            <Left width={20} height={20} strokeColor='white' />
            <Text style={styles.backText}>Previous Question</Text>
          </View>
        </TouchableHighlight>
      )
    }
  }

  const add = (n) => {
    if (scores[selectedId] === -1) {
      setNumAnswered(numAnswered + 1);
    }
    if (selectedId == 8) {
      if (n > 0) {
        setHotline(true);
        console.log("set to true");
      }
    }
    scores[selectedId] = n;
    setScore([...scores])
  };

  const scrollForward = () => {
    setSelAns(scores[selectedId]);
    if (selectedId < 8) {
      setSelectedId(selectedId + 1);
      setTimeout(() => setSelAns(scores[selectedId + 1]), 150);
    }
  };

  const scrollBack = () => {
    if (selectedId > 0) {
      setSelectedId(selectedId - 1);
    }
    setTimeout(() => setSelAns(scores[selectedId - 1]), 150);
  };

  useEffect(() => {
    if (questionRef) {
      questionRef.current.scrollTo({ x: selectedId * windowWidth * 2 })
    }
  }, [selectedId])

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={false} ref={introRef}>
        <SurveyIntro transition={() => { introRef.current.scrollTo({ y: 0 }); introRef.current.scrollTo({ y: windowHeight * .8 }); setControlsVisible(true); registerForPushNotificationsAsync(); cancelPushNotifications(); surveyFinishedReminder(); }} />
        <View style={styles.survey}>
          <Text style={styles.title}>PHQ-9 Survey</Text>
          <Text style={styles.questionIntro} >How often have you been bothered by the following over the past 2 weeks?</Text>
          <ScrollView horizontal={true} pagingEnabled={true} scrollEnabled={false} ref={questionRef}>
            {questionData.map((item) => {
              return (
                <View key={item.title}>
                  <SurveyQuestion questionTitle={item.title} press={scrollForward} set={add} selAns={selAns} />
                </View>
              )
            })}
          </ScrollView>

        </View>
        <SurveyResult hotline={hotline} scores={scores} press={() => props.navigation.navigate('Learn')} />
      </ScrollView>
      {renderBackButton()}
      {renderSubmitButton()}
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
    fontSize: 27,
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
    fontSize: 17,
    alignSelf: 'center',
    fontStyle: 'italic',
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
    bottom: 10,
    left: 15,
    width: 200,
    height: 50,
    backgroundColor: '#469C97',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  backText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    width: 130,
    height: 50,
    backgroundColor: '#469C97',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  progressContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  progressBar: {
    height: 10
  },
  progressNumber: {
    color: 'black',
    padding: 10
  }
});

export default SurveyPage;