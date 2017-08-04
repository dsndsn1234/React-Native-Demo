'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View,StyleSheet, TouchableOpacity} from 'react-native';

class MyFetch extends Component{
  render(){
    return(
      <View style = {this.MyButtonStyles.btnStyle}>
        <TouchableOpacity onPress:(this.getData)>
          <Text>点击访问</Text>
        </TouchableOpacity>
      </View>
    )
  }

  getData(){
      fetch('https://mywebsite.com/endpoint/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'key1=value1&key2=value2',
      }
    }).then((response) => response.json())
      .then((responseJson) =>{
        alert(responseJson);
      })
      .catch((error)=>{
         alert(responseJson);
      })
}

const MyButtonStyles = StyleSheet.create ({
  btnStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('DemoApp',()=> MyFetch);
