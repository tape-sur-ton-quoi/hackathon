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
        
        return (
            <View>
                <Animated.Image source={this.props.trumpImg}
                    style={{
                        height: 100,
                        width: 100,
                        position: 'absolute',
                        resizeMode: 'stretch',
                        left: this.props.trumpStartposX,
                        transform: [
                            { translateY: this.props.moveTrumpVal }
                        ]
                    }}>
                </Animated.Image>
                
            </View>
            
        )
    }
    componentDidMount = () => {
        this.animateTrump()
    }
    animateTrump =()=> {
        this.state.moveTrumpVal.setValue(-100);
        const windowH = Dimensions.get('window').height;

        const r = Math.floor(Math.random()*2)+1;

        if (r == 2) {
            r = 40;
            this.setState({ trumpSide: 'left'});
        }else {
            r = Dimensions.get('window').width - 140;
            this.setState({ trumpSide: 'right'});
        }
        this.setState({trumpStartposX: r });

        let refreshIntervalId;
        refreshIntervalId = setInterval(() => {
          if(this.state.moveTrumpVal._value > windowH - 280
            && this.state.moveTrumpVal._value < windowH - 180
            && this.state.princessSide == this.state.trumpSide) {

                clearInterval(refreshIntervalId)
                this.setState({ gameOver : true });
                this.gameOver();
            }
        },50);


        setInterval(() => {
        this.setState(({ trumpSpeed: this.state.trumpSpeed - 50}))
        },20000);
        Animated.timing(
           this.state.moveTrumpVal, {
               toValue: Dimensions.get('window').height,
               duration: this.state.trumpSpeed,
           } 
        ).start(event => {
            if(event.finished && this.state.gameOver == false) {
              clearInterval(refreshIntervalId)
              this.setState({ points: ++this.state.points})
              this.animateTrump()
            }
        })
    }
        gameOver() {
           alert('perdu');
        }
}
