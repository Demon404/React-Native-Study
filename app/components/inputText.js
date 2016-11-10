import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
}from 'react-native';
export default class TextInputView extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.baseStyle} style={styles.first}>

        </TextInput>
        <TextInput style={styles.baseStyle} style={styles.second}>
        </TextInput>
        <TextInput style={styles.baseStyle} style={styles.third}>
        </TextInput>
        <TextInput style={styles.baseStyle} style={styles.fourth}>
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  baseStyle: {
    height: 40,
    backgroundColor:'white',
    margin:30,
  },
  first: {

  },
  second: {

  },
  third: {

  },
  fourth: {

  },
});
