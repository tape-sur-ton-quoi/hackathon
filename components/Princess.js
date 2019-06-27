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

export default function App() {
  return (
    <View>
      <Text>Princess</Text>
        <Image source={require('../assets/bg.png')}
            style={{
              resizeMode: 'cover',
            }}>
          </Image>
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
