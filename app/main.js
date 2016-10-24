/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   ListView,
   TouchableHighlight,
 } from 'react-native';
import TextComponent from './components/text';
import ViewComponent from './components/view';
import ImageComponent from './components/imageView';

 export default class Main extends Component {
   //设置数据源
   componentWillMount(){
     this.setState({
        dataSource : this.state.dataSource.cloneWithRows([
           {'title':'TextComponent'} ,
           {'title':'ViewComponent'},
           {'title': 'ImageComponent'},
        ]),
     });
   }
   constructor(props) {
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
      };
  }
  rowPressed(rowdata){
    if (rowdata.title == 'TextComponent') {
      this.props.navigator.push({
        component:TextComponent,
      })
    } else if (rowdata.title == 'ViewComponent') {
      this.props.navigator.push({
        component:ViewComponent,
      })
    } else if (rowdata.title == 'ImageComponent') {
      this.props.navigator.push({
        component: ImageComponent,
      })
    } else {

    }
  }
  cellRow(data) {
    return(
      <TouchableHighlight onPress={()=>this.rowPressed(data)}>
        <View style={{backgroundColor: '#F5FCFF',height:40,borderWidth:1,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.titleQ}>{data.title}</Text>
        </View>
    </TouchableHighlight>
    )
  }
   render() {
     return (
       <View style={styles.container}>
         <View style={{height:64,backgroundColor:'white'}}>
           <View style={{backgroundColor:'green',marginTop:20,height:44,justifyContent: 'center',alignItems: 'center'}}>
             <Text style={styles.navTitle}>组件</Text>
           </View>
         </View>
         <ListView
            initiaListSize={1}
            onEndReachedThreshold={10}
            dataSource={this.state.dataSource}
            renderRow={this.cellRow.bind(this)}
            style={styles.listView}
        />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'gainsboro',
   },
   titleQ: {
        fontSize: 18,
        textAlign: 'left',
        margin: 10,
    },
    listView: {
        backgroundColor: 'transparent',
        flex:1,
    },
    navTitle: {
      fontSize: 24,
      color:'white',
    },
 });
