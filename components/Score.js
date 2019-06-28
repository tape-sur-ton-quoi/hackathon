import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  Image,
  View
} from "react-native";

export default class Score extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     points: 0,
  //   };
  //}
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.points}>
          <Text style={styles.text}>
           {this.props.points}
          </Text>
          
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  points: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  view: {
    alignItems: "center",
    marginTop: 80,
  },
  text: {
    fontweight: "bold",
    fontSize: 40,
  }
});
