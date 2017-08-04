'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blick extends Component{
  constructor(props) {
    super(props);
    this.state = {showText:true};
    setInterval( () => {
      this.setState({showText:!this.state.showText});
      } ,1000);
    }

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return(
      <Text>{display}</Text>
    );
  }

}

class BlinkCustom extends Component {
  render(){
    return(
        <View style={{marginTop:20}}>
          <Blick text = 'aaa'/>
          <Blick text = 'bbb'/>
          <Blick text = 'ccc'/>
          <Blick text = 'ddd'/>
        </View>
    );
  }
}


AppRegistry.registerComponent('DemoApp',() =>BlinkCustom);
