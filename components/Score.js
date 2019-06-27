import React, { Component } from "react";
import {
  AppRegistry,
  Stylesheet,
  Text,
  Animated,
  Image,
  View
} from "react-native";

export default class Score extends Component {
  render() {
    return (
      <View >
        <Text
          style={{fontweight: "bold",fontSize: 40,flex:1,alignItems:"center",marginTop:80}}>
          </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  points: {
    width:80,
    height:80,
    backgroundColor:'#fff',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',

    
  },
})
