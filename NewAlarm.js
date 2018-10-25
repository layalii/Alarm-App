import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Slider } from "react-native";

export default class NewAlarm extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, marginBottom: 30, color: "gray" }}>
            New Alarm
          </Text>
          <Text style={{ fontSize: 46, marginBottom: 30, color: "gray" }}>
            12:30
          </Text>
          <Slider
            step={1}
            maximumValue={23}
            value={0}
            disabled="true"
            onSlidingComplete={null}
            style={{ width: 200, height: 20, padding: 30 }}
          />
          <View style={styles.roundedContainer}>
            <Item title="M" />
            <Item title="T" />
            <Item title="W" />
            <Item title="T" />
            <Item title="F" />
            <Item title="S" />
            <Item title="S" />
          </View>
          <View />
          <View style={styles.buttonscConatiner}>
            <TouchableOpacity onPress={null}>
              <Text style={{ color: "gray", fontSize: 18 }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
              <Text style={{ color: "gray", fontSize: 18 }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const Item = props => {
  return (
    <View style={styles.roundedView}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center"
  },
  roundedContainer: {
    width: 300,
    height: 100,
    backgroundColor: "yellow",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  roundedView: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 100,
    padding: 2,
    margin: 10
  },
  buttonscConatiner: {
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
