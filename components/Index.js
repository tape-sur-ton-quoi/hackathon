import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Image,
} from 'react-native';

import Trump from './Trump.js'

export default class Index extends Component {
    state = {
        moveTrumpval: new Animated.Value(0),
        trumpStartposX: 0,
        trumpSide: 'left',
        trumpSpeed: 4200,

        gameOver: false,
    }

    render() {
        return (
                <Trump trumpImg={require('../assets/trump.png')}
                    trumpStartposX={this.state.trumpStartposX} moveTrumpval={this.state.moveTrumpval} />
        )
    }
}
