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
  render (){
  return (
    <View>

      <Animated.Image source={this.props.princessImg}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          marginTop: 550,
          resizeMode: 'stretch',
          transform: [
            { translateX: this.props.movePrincessVal }
          ]
        }}>
      </Animated.Image>
    </View>

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
