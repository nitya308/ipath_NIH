import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

function EmptyScreen({ navigation }) {
  return (
      <View style={styles.flexContainer}>
        <Text style={styles.italicSubheading}>This page should have a progress circle on it.</Text>
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

export default EmptyScreen;