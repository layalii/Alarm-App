import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ButtomButtons from "./ButtomButtons";

export default class AlarmRing extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.buttomIcon}>
            <MaterialIcons name="add-alarm" color="gray" size={60} />
          </View>
          <Text style={{ fontSize: 36, color: "rgba(0,0,0,.4)" }}>05:00</Text>
          <Text style={{ fontSize: 20, color: "rgba(0,0,0,.4)" }}>
            MON 10/10/2019
          </Text>
        </View>
        <ButtomButtons btn1="Snooze" btn2="Dismiss" />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    alignContent: "center",
    paddingTop: "10%"
  },
  buttomIcon: {
    alignItems: "center",
    marginBottom: 20
  }
});
