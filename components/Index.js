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
import Vilain from './Vilain'

export default class Index extends Component {

    state = {
        movePrincessVal: new Animated.Value(40),
        princessSide: 'left',

        moveEnnemiVal: new Animated.Value(0),
        ennemyStartposX: 0,
        ennemySide: 'left',
        ennemySpeed: 4200,
        

        gameOver: false,
    }
    componentDidMount() {
        this.animatedEnnemy();
    }
    
    animatedEnnemy() {
        this.state.moveEnnemiVal.setValue(-100)
        let windhowH = Dimensions.get('window').height;

        let r = Math.floor(Math.random()*2)+1;

        if (r == 2) {
            r = 40;
            this.setState({ennemySide : 'left'})
        } else {
            r = Dimensions.get('window').width - 140
            this.setState({ennemySide : 'right'})
        }
        this.setState({ennemyStartposX : r });

        let refreshIntervalId;
        refreshIntervalId = setInterval(() => {
             if (this.state.moveEnnemiVal._value > windhowH - 280 &&
                 this.state.moveEnnemiVal._value < windhowH - 180 &&
                  this.state.playerSide == this.state.ennemySide) {

                clearInterval(refreshIntervalId)
                  this.setState({ gameOver: true })
                  this.gameOver();
             }

        }, 50)

        setInterval( () => {
            this.setState({ ennemySpeed: this.state.ennemySpeed - 50})
        }, 20000)

        Animated.timing(
          this.state.moveEnnemiVal,
          {
              toValue: Dimensions.get('window').height,
              duration: this.state.ennemySpeed,
          }
        ).start(event => {
            clearInterval(refreshIntervalId);
            this.setState

        })
    }
    render() {
        
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
                    {/* <Trump trumpImg={require('../assets/trump.png')} */}
                    
                <Vilain vilainImg={require('../assets/trump.png')}
                    ennemyStartposX={this.state.ennemyStartposX}
                    moveEnnemiVal={this.state.moveEnnemiVal}/>
                </ImageBackground>

                

                <Princess princessImg={require('../assets/princess.jpg')} movePrincessVal={this.state.movePrincessVal} />
            </View>
        );
        
    }
}




