import React from "react";
import { View, StyleSheet } from "react-native";
// import AlarmSet from "./AlarmSet";
import NewAlarm from "./NewAlarm";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewAlarm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  }
});
