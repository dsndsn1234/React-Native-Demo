'use strict';

import React,{Component} from 'react';
import {AppRegistry, ListView,View,Text,StyleSheet,Image} from 'react-native';

// class MyListViews extends Component{
//
//   constructor(props) {
//     super(props);
//     let listArray = [
//       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"},
//       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"},
//       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"}
//     ];
//
//     const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
//     this.state = {
//         dataSource:ds.cloneWithRows(listArray)
//     };
//   }
//   render(){
//     return(
//       <View style={{flex: 1, paddingTop: 20}}>
//           <ListView
//               showsVerticalScrollIndicator={false}
//               dataSource={this.ds.dataSource}
//               renderRow={(rowData,rowID) => <MyListCells source:{{uri:rowData.logo}} rowID:{rowData.name}/>}
//           />
//       </View>
//     )
//   }
// }
//
// class MyListCells extends Component {
//     render(){
//          return(
//              <View style = {{height: 60, alignItems:'center',flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'gray'}}>
//                  <Image source={this.props.source}
//                      style={{width:40,height:40}}
//                  />
//                  <Text>{this.props.rowID}</Text>
//              </View>
//                 )
//     }
// }
//
// var cellLayout;
// const MyListStyles = StyleSheet.create(
//     cellLayout = {
//         marginTop:20,
//         flex: 1,
//     },
// );

AppRegistry.registerComponent('DemoApp',()=>MyListViews);
