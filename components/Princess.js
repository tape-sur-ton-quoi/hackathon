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
    <Image source={require('../../assets/bg.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text>JE T'AIME</Text>
    </View>
    </Image>
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
