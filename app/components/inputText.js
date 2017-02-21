import React, {
  Component
} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height - 64;

import NavBar from '../navbar';


export default class TextInputView extends Component {
  //TextInput是输入框，有多重属性的配置，如果单纯的只用TextInput的话，会出现位置不对的情况，所以一般都配合View来使用。
  //最下面的这个就是没有配合View使用的文本框
  //
  constructor(props) {
      //我们先来位每个文本框设置一下文本输入的提示文字，也为获取输入框文字来做铺垫
      super(props);
      this.state = {
        first: '第一个文本框',
        second: '第二个文本框',
        third: '第三个文本框',
        fourth: '第四个文本框',
      };
    }
    //
  render() {
    return (
      <View>
        <NavBar name='TextInput' back={()=>{this.props.navigator.pop()}}/>
        <View style={styles.container}>
          <View style={{flex:1,justifyContent:'center'}}>
            <TextInput style={[styles.baseStyle,styles.first]} 
                       autoCapitalize='none' 
                       autoCorrect={false} 
                       defaultValue='设置初始值' 
                       keyboardType='default'
                       maxLength={10}
                       onBlur={()=>{Alert.alert('第一个文本框失去焦点')}}
                       secureTextEntry={true}
                       >
            </TextInput>
          </View>
          <View style={{flex:1,justifyContent:'center'}}>
            <TextInput style={[styles.baseStyle,styles.second]} 
                       autoCapitalize='sentences' 
                       autoCorrect={true} 
                       keyboardType='numeric'
                       maxLength={5}
                       onChange={()=>{Alert.alert('文字改变了')}}
                       selectionColor='blue'
                       >
            </TextInput>
          </View>
          <View style={{flex:1,justifyContent:'center'}}>
            <TextInput style={[styles.baseStyle,styles.third]} 
                       autoCapitalize='words' 
                       autoFocus={true} 
                       keyboardType='numeric'//设置键盘类型
                       multiline={true}//多行文字
                       onChangeText={(third)=>this.setState({third})}
                       >
            </TextInput>
          </View>

            <TextInput style={[styles.baseStyle,styles.fourth]} 
                       autoCapitalize='characters' 
                       autoFocus={false}
                       maxLength={15}
                       placeholder='占位字符串'
                       placeholderTextColor='red'
                       >
            </TextInput>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseStyle: {
    height: 40,
    backgroundColor: 'white',
    width: 200
  },
  first: {
    // color: 'black', //文字的颜色
    // fontFamily: 'Times', //设置字体
    // fontSize: 20, //设置文字大小
  },
  second: {
    // fontStyle: 'italic', //设置文字：normal：正常体；italic：斜体
    // fontWeight: 'normal', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'
    // lineHeight: 30, //设置行高
  },
  third: {

  },
  fourth: {

  },
});