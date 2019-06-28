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

export default class Princess extends Component {

  render() {
    return (
      <View>
        <Animated.Image source={this.props.princessImg}
          style={{
            height: 130,
            width: 100,
            position: 'absolute',
            top: 550,
            resizeMode: 'stretch',
            transform: [
              { translateX: this.props.movePrincessVal }
            ]
          }}>
        </Animated.Image>
        <Text style={{
          position: 'absolute',
          top: 600,
         }}
        
        >{this.props.good}</Text>   
      

      </View>
    )
  }
}



      



