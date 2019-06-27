import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    ImageBackground,

} from 'react-native';

import Trump from './Trump';
import Princess from './Princess';

import Punchlines from '../punchlines.json'
export default class Index extends Component {

    state = {
        moveTrumpval: new Animated.Value(0),
        trumpStartposX: 0,
        trumpSide: 'left',
        trumpSpeed: 4200,
        movePrincessVal: new Animated.Value(40),
        princessSide: 'left',

        gameOver: false,

    }


    render() {

        
        const random = Math.floor(Math.random() * Punchlines.length);
        const bad = Punchlines[random].bad;
        const good = Punchlines[random].good;

        const gameOver = () => {
                alert(good)
        }
      
         return (
            <View>
                <ImageBackground source={require('../assets/bg.jpg')}
                    style={{
                        height:670,
                        width:400,
                        flex: 1,
                        position: 'relative',
                        resizeMode: 'cover',
                    }}>
                    <Trump trumpImg={require('../assets/trump.png')}
                        trumpStartposX={this.state.trumpStartposX} moveTrumpval={this.state.moveTrumpval} />
                        <Text>{bad}</Text>
                    <Princess princessImg={require('../assets/princess.jpg')} movePrincessVal={this.state.movePrincessVal} />
                </ImageBackground>
            </View>
           
        );
    }
   
        

    
}




