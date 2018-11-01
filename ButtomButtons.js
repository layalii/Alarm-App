import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Buttons extends Component {
  render() {
    const { btn1, btn2 } = this.props;
    return (
      <View style={styles.buttonscConatiner}>
        <TouchableOpacity onPress={null}>
          <Text style={{ color: "rgba(0,0,0,.4)", fontSize: 18 }}>{btn1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (btn2 === "Save") {
              this.props.navigation.navigate("AlarmRing");
            }
          }}
        >
          <Text style={{ color: "rgba(0,0,0,.4)", fontSize: 18 }}>{btn2}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonscConatiner: {
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
