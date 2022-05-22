import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const LoginInput = (props) => {
  const [text, onChangeText] = React.useState(props.placeholder);

  return (
    <SafeAreaView>
      <TextInput
        clearTextOnFocus={true}
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
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