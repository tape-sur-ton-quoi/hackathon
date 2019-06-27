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
        movePrincessVal: new Animated.Value(40),
        princessSide: 'left',

        moveTrumpVal: new Animated.Value(0),
        trumpStartposX: 0,
        trumpSide: 'left',
        trumpSpeed: 4200,

        gameOver: false,

    }



    render() {

        var random = Math.floor(Math.random() * Punchlines.length);
        var bad = Punchlines[random].bad;
        var good = Punchlines[random].good;

        var gameOver = () => {
            alert(good)
        }

        return (
            <View>

                <ImageBackground source={require('../assets/bg.jpg')}
                    style={{
                        height: 670,
                        width: 400,
                        flex: 1,
                        position: 'relative',
                        resizeMode: 'cover',
                    }}>
                    <Text>{bad}</Text>
                    <Princess princessImg={require('../assets/princess.jpg')} movePrincessVal={this.state.movePrincessVal} />
                    <Trump trumpImg={require('../assets/trump.png')}
                        trumpStartposX={this.state.trumpStartposX} moveTrumpVal={this.state.moveTrumpVal} />
                </ImageBackground>
            </View>

        );
     
    }
}