import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class TextClass extends Component {
  onPressTitle(){
    //Text  onPress的点击方法，点击之后的操作写在这里！
  }
  render() {
    //numberOfLines表示的是文本的行数，包括折叠产生的换行在内，总的行数不会超过这个属性的限制
    //onPress当文本被点击以后调用此回调函数。
    //style文本的样式,这里把常用的样式列出来供大家参考,除了自身的样式外，还继承了View的样式
    //View的样式咱们后边再说，现在先看Text的样式
    //ellipsizeMode:设置文本省略的位置，必须和numberOfLines配合使用
    //
    //如下，Text可以嵌套使用，不过一般为了文字上下左右居中，用View嵌套Text
    return (
      <View style={styles.container}>
        <Text numberOfLines={0}
              onPress={this.onPressTitle}
              style={styles.textstyle}
              ellipsizeMode='head'>
          你好！我是Demon404,欢迎关注我!{'\n'}
          我的博客园地址是：博客园{'\n'}
          我的github：github{'\n'}
          我的简书：简书{'\n'}
        </Text>

        <Text style={{fontWeight: 'normal'}}>
          I am bold
          <Text style={{color: 'red'}}>
            and red
          </Text>
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textstyle: {
    color: 'black',//文字的颜色
    fontFamily: 'Times',//设置字体
    fontSize: 20,//设置文字大小
    fontStyle: 'italic',//设置文字：normal：正常体；italic：斜体
    fontWeight: 'normal',//设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'
    lineHeight: 30,//设置行高
    textAlign: 'center',//设置字体位置，'auto' /*default*/, 'left', 'right', 'center', 'justify'
    textDecorationLine: 'underline',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'
  }
});
