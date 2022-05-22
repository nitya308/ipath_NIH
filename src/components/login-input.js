import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const LoginInput = (props) => {
  const [text, onChangeText] = React.useState(props.placeholder);

  return (
    <SafeAreaView>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        clearTextOnFocus={true}
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        autoFocus={props.autoFocus}
        secureTextEntry={props.secure}
        onFocus={props.onFocus}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginInput;