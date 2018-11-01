import React, { Component } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

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
    const { alarms } = this.state;
    return (
      <React.Fragment>
        <View style={styles.wrapper}>
          {alarms.map((alm, i) => {
            return <Item key={i} alarm={alm} />;
          })}
        </View>
        <TouchableOpacity
          style={styles.buttomIcon}
          onPress={() => this.props.navigation.navigate("NewAlarm")}
        >
          <Icon name="ios-add-circle-outline" color="gray" size={60} />
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const Item = props => {
  return (
    <View style={styles.symbole1}>
      <View style={styles.symbole2}>
        <Text style={styles.txt1}>
          {props.alarm.hour}:{props.alarm.minute}
        </Text>
        <Text style={styles.txt2}>{props.alarm.day}</Text>
      </View>
      <Icon name="ios-settings" color="gray" size={23} />
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
    paddingHorizontal: 20,
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 1
  },
  symbole2: {
    flexDirection: "column"
  },
  txt1: {
    fontSize: 34,
    color: "gray",
    fontWeight: "normal"
  },
  txt2: {
    fontSize: 12,
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
