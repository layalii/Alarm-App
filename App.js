import React from "react";
import { View, StyleSheet } from "react-native";
import AlarmSet from "./AlarmSet";
import NewAlarm from "./NewAlarm";
import AlarmRing from "./AlarmRing";
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Route />
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

const Route = createStackNavigator(
  {
    AlarmSet: {
      screen: AlarmSet
    },
    NewAlarm: {
      screen: NewAlarm
    },
    AlarmRing: {
      screen: AlarmRing
    }
  },
  {
    initialRouteName: "AlarmSet",
    headerMode: "none"
  }
);
