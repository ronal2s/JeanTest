import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import Expo from "expo";
import * as Speech from "expo-speech";

export default class Home extends React.Component {
  state = {
    txtSpeak: "Este proyecto será extraordinario.",
  };
  onSpeak = () => {
    Speech.speak(this.state.txtSpeak, { language: "es" });
  };

  render() {
    return (
      <View style={(styles.container, { paddingTop: 200 })}>
        <Button title="Speech" onPress={this.onSpeak} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    width: 100,
    height: 100,
  },
});
