'use strict';

import React ,{Component} form 'react';
import {AppRegistry, Text, View, StyleSheet} form 'react-native';

class lotsOfStyles {
  constructor() {

  }

  rander(){
    return(
      <View>
        <Text style = {this.styles.bigBluew}>我是蓝色的</Text>
        <Text style = {this.styles.red}>我是红色的</Text>
        <Text style = {[this.styles.bigBluew,this.styles.red]}>红字，bigBluew样式</Text>
        <Text style = {[this.styles.red,this.styles.bigBluew]}>blue样式，蓝字</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  bigBluew:{
    color: 'blue';
    fontWeight: 'blod';
    fontSize: 30;
  },
  red:{
    color: 'red';
  }
});

AppRegistry.registerComponent('ReactCalculator',()=>lotsOfStyles);
