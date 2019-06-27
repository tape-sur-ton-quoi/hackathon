import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageBackground
} from "react-native";
import Trump from "./Trump";
import Princess from "./Princess";
import Score from "./Score"

export default class Index extends Component {
  state = {
    moveTrumpval: new Animated.Value(0),
    trumpStartposX: 0,
    trumpSide: "left",
    trumpSpeed: 4200,
    movePrincessVal: new Animated.Value(40),
    points: 0,
    princessSide: "left",

    gameOver: false
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/bg.jpg")}
          style={{
            height: 670,
            width: 400,
            flex: 1,
            position: "relative",
            resizeMode: "cover"
          }}
        >
          <Trump
            trumpImg={require("../assets/trump.png")}
            trumpStartposX={this.state.trumpStartposX}
            moveTrumpval={this.state.moveTrumpval}
          />
        </ImageBackground>
        <Princess
          princessImg={require("../assets/princess.jpg")}
          movePrincessVal={this.state.movePrincessVal}
        />
        <Score points={this.state.points} />
      </View>
    );
  }
}
