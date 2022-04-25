import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const LoginInput = (props) => {
  const [text, onChangeText] = React.useState(props.placeholder);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginInput;