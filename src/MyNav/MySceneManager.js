'use strict';

import React ,{Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';
import MyScene form './MyNav/MyNavigator'

class MySceneManager extends Component{
  render(){
    return(
      <Navigator
        initialRoute={{title:'My init scene',index:0}}
        renderScene={(route,navigator) =>
          <MyScene
            title = {route.title}
            onForward={()=>
              const nextIndex = route.index + 1;
              navigator.push({
                  title :'Scene' + nextIndex,
                  index: nextIndex,
              });
              onBack={()=>
                if (route.index > 0) {
                    navigator.pop();
                }
              }
            }
          />
        }
      />
    )
  }
}


AppRegistry.registerComponent('ReactCalculator',()=>MySceneManager);
