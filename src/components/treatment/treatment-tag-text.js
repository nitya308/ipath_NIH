import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function TreatmentItemTagText(props) {
  console.log(props);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          {props.icon}
        </View>
        <Text style={styles.text}>{props.name}</Text>
      </View>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  box:{
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    margin: 5,
    marginHorizontal: 10,
    color: "#000000",
    height: 20,
    lineHeight: 20,
    display: 'flex',
    fontSize: 20
  }
})

export default TreatmentItemTagText; 