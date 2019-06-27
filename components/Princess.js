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
        <Image>
          <Animated.Image source={require('../assets/bg.png')}
            style={{
              height: 100,
            }}
          ></Animated.Image>
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
