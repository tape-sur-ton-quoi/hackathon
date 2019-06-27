import React from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Animated,
  Image,
 } from 'react-native';

 import Trump  from './components/Trump'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Je t'aime!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
