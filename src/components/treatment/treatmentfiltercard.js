import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';

export default function TreatmentFilterCard(props) {
  return (
    <View>
      {props.icon}
      <Text style={props.selected? [styles.treatmentTypetext, {color: "#FFFFFF"}]: styles.treatmentTypetext}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  treatmentTypetext: {
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 10,
    fontFamily: 'Poppins-Bold',
  },
});