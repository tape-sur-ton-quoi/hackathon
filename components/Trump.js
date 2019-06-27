import React, {Component} from 'react';
import {
    AppRegistry,
    Stylesheet,
    Text,
    Animated,
    Image,
} from 'react-native';

export default class Trump extends Component {

    render () {
        return (
            <Animated.Image source ={this.props.trumpImg}
                style ={{
                    height: 100,
                    width: 100,
                    position: 'absolute',
                    resizeMode: 'stretch',
                    left: this.props.trumpStartposX,
                    transform: [
                        {translateY: this.props.moveTrumpval}
                    ]
                }}></Animated.Image>
        )
    }
}