import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
 } from 'react-native';
import Index from './components/Index.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <ImageBackground source={require('./assets/bg.png')}
            style={{
              resizeMode: 'cover',
            }}>
          </ImageBackground>
        <Index/>
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
