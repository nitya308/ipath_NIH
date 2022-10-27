import { StyleSheet, Text } from "react-native";

export default function FakeLoading(props) {
  return (<>
    <Text style={styles.loadingText}>
      We’re putting together a list of treatment options based on your preferences
    </Text>
  </>);
}

const styles = StyleSheet.create({
  loadingText: {
    width: "70%",
    fontStyle: 'italic',
    fontSize: 20,
    lineHeight: 30,
    paddingVertical:20,
  },
});