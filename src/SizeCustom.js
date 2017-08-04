'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';

class MyInputViews extends Component{
  constructor(props) {
    this.state = {text:' '};
  }
  rander(){
    return(
        <View style:{{panding:10}}>
            <TextInput
                style:{{fontSize: 15}}
                placeholder='我是默认'
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{panding: 10,fontSize:20}}>
                {this.state.text.split(' ').map((word) => word && '馅饼').join('好吃')}
            </Text>
        </View>
    )
  }
}




AppRegistry.registerComponent('ReactCalculator',()=>MyInputViews);
