import React, {Component} from 'react';
import {
    AppRegistry,
    Stylesheet,
    Text,
    Animated,
    Image,
    View,
} from 'react-native';

export default function App() {
 return (
            <View>
                <Animated.Image 
                source={require('../assets/trump.png')}
                style ={{
                   height: 100,
                    width: 100,
                }}>

                </Animated.Image>
                <Text>Trump</Text>
            </View> 
            //      style ={{
            //         height: 1000,
            //         width: 1000,
            //     //   position: 'absolute',
            //     //    resizeMode: 'stretch',
            //     //  left: this.props.trumpStartposX,
            //     //      transform: [
            //     //         {translateY: this.props.moveTrumpval}
            //     //    ]
            //      }}
            
            //</Animated>
        )
}