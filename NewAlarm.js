import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Slider } from "react-native";
import ButtomButtons from "./ButtomButtons";

export default class NewAlarm extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text
            style={{ fontSize: 32, marginBottom: 30, color: "rgba(0,0,0,.4)" }}
          >
            New Alarm
          </Text>
          <Text
            style={{ fontSize: 46, marginBottom: 40, color: "rgba(0,0,0,.4)" }}
          >
            12:30
          </Text>
          <View style={styles.hourWrapper}>
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>00</Text>
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>12</Text>
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>23</Text>
          </View>
          <Slider
            step={1}
            maximumValue={23}
            value={0}
            onSlidingComplete={null}
            style={{
              width: "80%",
              height: 20,
              padding: 30
            }}
          />
          <View style={styles.hourWrapper}>
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>00</Text>
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>12</Text>
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <View style={{ width: 2, height: 15, backgroundColor: "gray" }} />
            <Text style={{ color: "rgba(0,0,0,.3)", fontSize: 22 }}>59</Text>
          </View>
          <Slider
            step={1}
            maximumValue={23}
            value={0}
            onSlidingComplete={null}
            style={{
              width: "80%",
              height: 20,
              padding: 30
            }}
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
          <ButtomButtons
            btn1="Cancel"
            btn2="Save"
            navigation={this.props.navigation}
          />
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
    padding: 10,
    flexGrow: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  roundedContainer: {
    width: "80%",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    marginBottom: 30
  },
  roundedView: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 100,
    padding: 2,
    margin: 10
  },
  hourWrapper: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
