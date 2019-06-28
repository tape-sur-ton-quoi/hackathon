import React, { Component } from 'react';
import {
    AppRegistry,
    Stylesheet,
    Text,
    Animated,
    Dimensions,
    Image,
    View,
} from 'react-native';


export default class Trump extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveTrumpVal: new Animated.Value(0),
        trumpStartposX: 0,
        trumpSide: 'left',
        trumpSpeed: 4200,
        }
    }

    render() {
        console.log(this.props.bad)
        return (
            <View>
            <Animated.Image source={this.props.trumpImg}
            style={{
                height: 130,
                width: 150,
                position: 'absolute',
                resizeMode: 'stretch',
                left: this.props.trumpStartposX,
                transform: [
                    { translateY: this.props.moveTrumpVal }
                ]
            }}>

            </Animated.Image>
                <Text
                style={{
                    margin:50,
                    width: 250,
                    position: 'absolute',
                    top: 25,
                }}>Trump: {this.props.bad}</Text> 
                </View>
        )
    }
  
}
