import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { fetchLastSurveyed } from '../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function EmptyScreen(props, { navigation }) {
  const user = useSelector((state) => state.user);
  useEffect (() => {
    const lastDate = async () => {props.fetchLastSurveyed(user.userId);}
    lastDate();
  }, []);

  const LSD = useSelector((user) => user.lastSurveyed)
  console.log('LSD',  LSD)

  return (
      <View style={styles.flexContainer}>
        <Text style={styles.italicSubheading}>This page should have a progress circle on it.</Text>
        <Text style={styles.italicSubheading}>{LSD}</Text>
        <ProgressCircle
          percent={50}
          radius={50}
          borderWidth={10}
          color="#469C97"
          bgcolor="fff"
          shadowColor="#999">
            <Text> Hi </Text>
        </ProgressCircle>
      </View>
  );
}

const styles = StyleSheet.create({
  italicSubheading: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
    flex: 2,
  },
  flexContainer: {
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  }
});

export default connect(null, { fetchLastSurveyed })(EmptyScreen);