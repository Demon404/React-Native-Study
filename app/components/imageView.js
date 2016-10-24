import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
}from 'react-native';

export default class ImageView extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.imageStyle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width:100,
    height:100,
    backgroundColor:'red',
  }
});
