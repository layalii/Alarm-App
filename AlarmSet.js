import React, { Component } from "react";
import { View, Text, Icon, StyleSheet, Switch } from "react-native";

class AlarmSet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Item />
        <View>Icon</View>
      </View>
    );
  }
}

const Item = () => {
  return (
    <View style={styles.symbole1}>
      <View style={styles.symbole2}>
        <Text>fjhdjh</Text>
        <Text>fjhdjh</Text>
      </View>
      <Icon color="red" />
      <Switch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  },
  symbole1: {}
});
