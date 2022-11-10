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
      introRef.current?.scrollTo({ x: 0, animated: false });
      questionRef.current?.scrollTo({ y: 0, y: 0, animated: false });
    },
  }));

  const renderSubmitButton = () => {
      if (selectedId == 8) {
        return (
          <TouchableHighlight underlayColor="gray" style={styles.submitButton} onPress={() => { addSurveyRes(`${user.userId}`, scores, new Date()); updateLastSurveyed(`${user.userId}`, new Date()); introRef.current.scrollToEnd(); setControlsVisible(false); cancelPushNotifications(); schedulePushNotification(); }}>
            <Text style={styles.backText}>Submit</Text>
          </TouchableHighlight>
        );
      } else {
        return (
          <View style={styles.progressContainer}>
            <Progress.Bar style={styles.progressBar} progress={selectedId / questionData.length} width={65} height={10} color='#5451F8' unfilledColor="lightgray" borderRadius={5} borderWidth={0} />
            <Text style={styles.progressNumber}>{selectedId}/9</Text>
          </View>
        );
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
      questionRef.current.scrollTo({ y: selectedId * (windowHeight * 0.65 + 35) })
    }
  }, [selectedId])

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={false} ref={introRef}>
        <SurveyIntro transition={() => { introRef.current.scrollTo({ y: 0 }); introRef.current.scrollTo({ y: windowHeight }); setControlsVisible(true); registerForPushNotificationsAsync(); cancelPushNotifications(); surveyFinishedReminder(); }} />
        <View style={styles.survey}>
          <Text style={styles.title}>PHQ-9 Survey</Text>
          <ScrollView vertical={true} pagingEnabled={true} scrollEnabled={false} ref={questionRef}>
            {questionData.map((item) => {
              return (
                <View key={item.title}>
                  <SurveyQuestion questionTitle={item.title} press={scrollForward} set={add} selAns={selAns} backpress = {scrollBack} nextbutton={renderSubmitButton()}/>
                </View>
              )
            })}
            <View style={{height: 400}}></View>
          </ScrollView>
        </View>
        <SurveyResult hotline={hotline} scores={scores} press={() => props.navigation.navigate('Learn')} />
      </ScrollView>
    </View>
  );
}

const questionData = [
  {
    id: 0,
    title: "1. How often have you had little interest or pleasure in doing things over the past two weeks?"
  },
  {
    id: 1,
    title: "2. How often have you felt down, depressed, or hopeless over the past two weeks?"
  },
  {
    id: 2,
    title: "3. How often have you had trouble falling or staying asleep, or sleeping too much  over the past two weeks?"
  },
  {
    id: 3,
    title: "4. How often have you felt tired or lacking energy in the past two weeks?"
  },
  {
    id: 4,
    title: "5. How often have you experienced a poor appetite or overeating in the past two weeks?"
  },
  {
    id: 5,
    title: "6. How often have you felt bad about yourself or that you are a failure or have let yourself or your family down, in the past two weeks?"
  },
  {
    id: 6,
    title: "7. How often have you had trouble concentrating on things, such as reading the newspaper or watching television in the past two weeks??"
  },
  {
    id: 7,
    title: "8. How often have you been moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual in the past two weeks?"
  },
  {
    id: 8,
    title: "9. Have you had thoughts that you would be better off dead, or thoughts of hurting yourself or others in the past 2 weeks?"
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
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  survey: {
    paddingTop: 50,
    height: windowHeight,
  },
  questionIntro: {
    fontFamily: 'Poppins-Italic',
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
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  button: {
    // height: 150,
    // width: 150,
    borderRadius: 10,
    backgroundColor: '#5451F8',
    margin: 8,
  },
  buttonContent: {
    textAlign: 'center',
    padding: 15,
    paddingTop: 20,
    fontSize: 20
  },
  submitButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    width: 130,
    height: 50,
    backgroundColor: '#5451F8',
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
    fontFamily: 'Poppins-Regular',
    color: 'black',
    padding: 10
  }
});

export default SurveyPage;