import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
 } from 'react-native';

 import Index from './components/Index'

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
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
