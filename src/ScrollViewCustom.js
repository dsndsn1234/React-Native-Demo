'use strict';
import React,{Component} form 'react';
import {AppRegistry, Scrollview, Text, View, Image} form 'react-native';

class MyScrollView extends Component{
  constructor() {

  }

  render(){
    return(
      <Scrollview>
          <Text style={fontSize:20,fontWeight:'blod'}>aaa</Text>
          <Image source:{require('./Images/aaa.png')}/>
          <Text style={fontSize:20,fontWeight:'blod'}>bbb</Text>
          <Image source:{require('./Images/bbb.png')}/>
          <Text style={fontSize:20,fontWeight:'blod'}>ccc</Text>
          <Image source:{require('./Images/ccc.png')}/>
      </Scrollview>

    )
  }
}

AppRegistry.registerComponent('ReactCalculator',()=>MyScrollView);
