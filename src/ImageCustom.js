'use strict';

import React,{Component} from 'react';
import {AppRegistry ,Image} from 'react-native';

class Bananas extends Component{
  render(){
    let pic = {
        uri :'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width:193,height:100}}/>
    )
  }
}

AppRegistry.registerComponent('DemoApp',()=>Bananas);
