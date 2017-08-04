'use strict';

import React,{Component}from 'react';
import {AppRegistry,View,Text} form 'react-native';

class Greeting extends Component {
  constructor() {

  }
  render(){
    return (){
      <Text>hellow {this.props.name}</Text>
    }
  }

  class lotsOfGreeting extends Component {
    constructor() {

    }

    rander(){

      return(
        <View style={{alignItems:'center'}}>
          <Greeting name ='abc'/>
          <Greeting name ='bcd'/>
          <Greeting name ='def'/>
        </View>
      );
    }

  }

}
