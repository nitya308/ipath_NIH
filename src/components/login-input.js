import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Dimensions } from "react-native";

const LoginInput = (props) => {
  return (
    <SafeAreaView style={{width: '100%'}}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        clearTextOnFocus={true}
        style={[styles.input, {backgroundColor: props.backgroundColor, color: props.textColor}]}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        autoFocus={props.autoFocus}
        secureTextEntry={props.secure}
        onFocus={props.onFocus}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
        placeholderTextColor={props.textColor}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    height: 50,
    margin: 10,
    padding: 10,
    color: '#FCFFFF',
    width: "90%",
    alignSelf: 'center',
  },
});

export default LoginInput;