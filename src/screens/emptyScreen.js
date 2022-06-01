import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';

function EmptyScreen({ navigation }) {
  return (
      <View style={styles.flexContainer}>
        <Text style={styles.italicSubheading}>This page is coming soon.</Text>
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