import React, {Component} from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Animated,
  ImageBackground,

 } from 'react-native';

 import Trump  from './Trump';
 import Princess from './Princess';

 export default function App() {
  return (
    <View>
      <ImageBackground source={require('../assets/bg.png')}
            style={{
              height: 1100,
              width: 1200,
            }}>
       
          <Text>Index</Text>
          <Trump/>
          <Princess/>
        </ImageBackground>
    </View>
  );
}