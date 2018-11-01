import React, { Component } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class AlarmSet extends Component {
  state = {
    alarms: [
      {
        hour: "05",
        minute: "00",
        day: "monday"
      },
      {
        hour: "10",
        minute: "30",
        day: "tuesday"
      },
      {
        hour: "22",
        minute: "34",
        day: "wednesday"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.wrapper}>
          {alarms.map(alm => {
            return <Item />;
          })}
        </View>
        <TouchableOpacity
          style={styles.buttomIcon}
          onPress={() => this.props.navigation.navigate("NewAlarm")}
        >
          <MaterialIcons name="add-circle-outline" color="gray" size={60} />
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const Item = () => {
  return (
    <View style={styles.symbole1}>
      <View style={styles.symbole2}>
        <Text style={styles.txt1}>05:00</Text>
        <Text style={styles.txt2}>Wednesday</Text>
      </View>
      <MaterialIcons name="settings" color="gray" size={23} />
      <Switch />
    </View>
  );
};

const styles = StyleSheet.create({
  symbole1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15
  },
  symbole2: {
    flexDirection: "column"
  },
  txt1: {
    fontSize: 22,
    color: "gray"
  },
  txt2: {
    fontSize: 14,
    color: "gray"
  },
  buttomIcon: {
    alignItems: "center",
    marginBottom: 20
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-start"
  }
});
