import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
} from 'react-native';

export default class Vilain extends Component {
  render (){
  return (
      <Animated.Image source={this.props.vilainImg}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          resizeMode: 'stretch',
          left: this.props.ennemyStartposX,
          transform: [
            { translateY: this.props.moveEnnemyVal }
          ]
        }}>
      </Animated.Image>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
