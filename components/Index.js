import React, {Component} from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Animated,
  Image,
 } from 'react-native';

 import Trump  from './Trump';
 import Princess from './Princess';

 export default function App() {
  return (
    <View>
      <Image source={require('../assets/bg.png')} style={style.container}></Image>

      <Text>Index</Text>
        <Trump/>
        <Princess/>
    </View>
  );
}