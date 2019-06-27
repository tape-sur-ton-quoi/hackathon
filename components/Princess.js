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
  constructor(props) {
    super(props);
    this.state = {
      movePrincessVal: new Animated.Value(40),
      princessSide: 'left',
    }
  }
  render() {
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
          { translateX: this.state.movePrincessVal }
        ]
      }}>
      </Animated.Image>

      <View style={styles.controls}>
        <Text style={styles.left} onPress={ () => this.movePrincess('left')}> {'<'} </Text>
        <Text style={styles.right} onPress={ () => this.movePrincess('right')}> {'>'} </Text>
      </View>

      </View>
  )
  }

  movePrincess(direction){
    //move princess right
    if(direction == 'right') {
      this.setState({ princessSide: 'right'});
      Animated.spring(
        this.state.movePrincessVal,
        {
          toValue: Dimensions.get('window').width - 140,
          tension: 120,
        }
      ).start();
    } else if (direction == 'left') {
      this.setState({ princessSide: 'left'});
      Animated.spring(
        this.state.movePrincessVal,
        {
          toValue: 40,
          tension: 120,
        }
      ).start();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    color: '#fff',
    margin: 0,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  left: {
    flex: 1,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right'
  },
});
