'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class MySize extends Component{
  render(){
    return(
      <View style={{
                    // flex:1,
                    // flexDirection:'row',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop:20,
                  }}>
        <View style={{flex: 1,width:50,height:50,backgroundColor:'red'}}/>
        <View style={{flex: 5,width:50,height:50,backgroundColor:'blue'}}/>
        <View style={{flex: 9,width:50,height:50,backgroundColor:'red'}}/>
      </View>
    )
  }
}

AppRegistry.registerComponent('DemoApp',()=>MySize);
