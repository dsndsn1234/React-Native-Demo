'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight} from 'react-native';

export default  class MyScene extends Component{
  static propTypes = {
    title:propTypes.title.isRequired,
    onForward: propTypes.func.isRequired,
    onBack: propTypes.func.isRequired,
  }
  render(){
    return(
      <View>
        <Text>Current scene :{this.propTypes.title}</Text>
        <TouchableHighlight onPress={this.propTypes.onForward}>
            <Text>前进</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.propTypes.onBack}>
            <Text>后退</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
