import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { fetchLastSurveyed, fetchFirstName } from '../../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function PCircle(props, { navigation }) {
  const user = useSelector((state) => state.user);
  // console.log('PRINTING User OBJECT FROM EmptyScreen.js \n', user);
  // console.log('PRINTING props OBJECT FROM EmptyScreen.js \n', props);

  useEffect(() => {
    const lastDate = async () => { fetchLastSurveyed(user.userId); }
    lastDate();
  }, []);

  const lastSurveyedValue = useSelector((state) => state.user.lastSurveyed);
  // const lastSurveyedDate = new Date(lastSurveyedValue);
  const date1 = new Date(lastSurveyedValue)
  const date2 = new Date()
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));
  const daysRemaining = 14 - diffDays;
  const percentRemaining = 100 * (daysRemaining / 14);

  // const ctdn = new Date().toISOString - lastSurveyedDate


  return (
    <View>
      <View style={styles.flexContainer}>
        <ProgressCircle
          percent={percentRemaining ? percentRemaining: 100}
          radius={25}
          borderWidth={5}
          color="#5451F8"
          bgcolor="fff"
          shadowColor="#999">
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }}> {daysRemaining? daysRemaining: '--'} </Text>
        </ProgressCircle>
        <Text style={{ fontFamily: 'Poppins-Italic'}}>  days </Text>
      </View>
      <Text style={{textDecorationLine: 'underline' }}>    TAKE NOW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    flex: 2,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  }
});

export default connect(null, { fetchLastSurveyed })(PCircle);