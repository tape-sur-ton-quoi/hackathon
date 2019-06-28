import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageBackground
} from "react-native";
import Trump from "./Trump";
import Princess from "./Princess";
import Score from "./Score"

import Punchlines from '../punchlines.json'
export default class Index extends Component {

    state = {
        movePrincessVal: new Animated.Value(40),
        princessSide: 'left',

        moveTrumpVal: new Animated.Value(0),
        trumpStartposX: 0,
        trumpSide: 'left',
        trumpSpeed: 4200,
        points: 0,
        punchlines: false,

        good: '',
        bad: ''
    }



    render() {
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
                    
                    <Princess princessImg={require('../assets/princess.jpg')} movePrincessVal={this.state.movePrincessVal} />
                    <Trump trumpImg={require('../assets/trump.png')}
                        trumpStartposX={this.state.trumpStartposX} moveTrumpVal={this.state.moveTrumpVal} bad={this.state.bad} />
                    <Score points = {this.state.points}/>   
                    <View style={styles.controls}>
                        <Text style={styles.left} onPress={() => this.movePrincess('left')}> {'<'} </Text>
                        <Text style={styles.right} onPress={() => this.movePrincess('right')}> {'>'} </Text>
                    </View>
                </ImageBackground>
            </View>

        );

    }
    componentDidMount = () => {
        this.animateTrump()

        var random = Math.floor(Math.random() * Punchlines.length);
        var bad = Punchlines[random].bad;
        var good = Punchlines[random].good;
        this.setState({good: good, bad: bad})
    }

    animateTrump =()=> {
        this.state.moveTrumpVal.setValue(-100);
        var windowH = Dimensions.get('window').height;

        var r = Math.floor(Math.random()*2)+1;

        if (r == 2) {
            r = 40;
            this.setState({ trumpSide: 'left'});
        }else {
            r = Dimensions.get('window').width - 140;
            this.setState({ trumpSide: 'right'});
        }
        this.setState({trumpStartposX: r });

        var refreshIntervalId;
        refreshIntervalId = setInterval(() => {
          if(this.state.moveTrumpVal._value > windowH - 280
            && this.state.moveTrumpVal._value < windowH - 180
            && this.state.princessSide == this.state.trumpSide) {

                clearInterval(refreshIntervalId)
                this.setState({ punchlines : true });
                this.punchlines();
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
            if(event.finished && this.state.punchlines == false) {
              clearInterval(refreshIntervalId)
             //this.setState({ points: ++this.state.points})
              this.animateTrump()
            }
        })
    }
        punchlines() {
           alert(this.state.good);
        }

    movePrincess(direction) {
        //move princess right
        if (direction == 'right') {
          this.setState({ princessSide: 'right' });
          Animated.spring(
            this.state.movePrincessVal,
            {
              toValue: Dimensions.get('window').width - 140,
              tension: 120,
            }
          ).start();
        } else if (direction == 'left') {
          this.setState({ princessSide: 'left' });
          Animated.spring(
            this.state.movePrincessVal,
            {
              toValue: 40,
              tension: 120,
            }
          ).start();
        }
      }
    }
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
            controls: {
              alignItems: 'center',
              flexDirection: 'row',
            },
            right: {
              flex: 1,
              color: '#fff',
              margin: 0,
              fontSize: 60,
              fontWeight: 'bold',
              textAlign: 'left'
            },
            left: {
              flex: 1,
              color: '#fff',
              fontSize: 60,
              fontWeight: 'bold',
              textAlign: 'right'
            },
          });
