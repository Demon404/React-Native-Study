import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class ViewClass extends Component {
  //View常用属性暂时就介绍这么多，其他的咱们以后重点介绍
  doubleClick() {
    //双击之后的事件处理写在这里
  }
  moveTest() {
    console.log('移动');
  }
  render() {
    //accessible表示此视图时一个启用了无障碍功能的元素。默认为true
    //onMagicTap:当accessible为true时，双击View会调用此函数。
    //onMoveShouldSetResponder: 触摸控件并滑动时调用的方法
    //onMoveShouldSetResponderCapture：触摸控件并滑动时调用的方法,避免子视图响应
    //onResponderMove：用户在View上移动手指调用
    //onResponderRelease：结束触摸时调用
    //pointerEvents:控制当前视图是否可以触控'box-none', 'none', 'box-only', 'auto'
    //其他的属性以后在介绍
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle}
              accessible={true}
              onMagicTap={this.doubleClick}
              onMoveShouldSetResponderCapture={this.moveTest}
              pointerEvents='auto'>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //View样式有Flex布局
  //一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求
  //flexDirection的默认值是column而不是row，alignItems的默认值是stretch而不是flex-start，以及flex只能指定一个数字值。
  //关于flex布局咱们另起一篇文章。
  container: {
    flex: 1,
    //当设置justifyContent: 'center',//上下居中 alignItems: 'center',//左右居中
    //那么这个View中的子视图都会在这个View的中间
    justifyContent: 'center',//上下居中
    alignItems: 'center',//左右居中
    backgroundColor: '#F5FCFF',
  },
  viewStyle: {
    width: 100,//设置宽度
    height: 100,//设置高度
    backgroundColor: 'red',//背景颜色
    backfaceVisibility: 'visible',//定义界面翻转的‘visible', 'hidden’
    borderBottomColor: 'blue',//设置底部边框颜色
    borderBottomLeftRadius: 20,//设置左下圆角大小
    borderBottomRightRadius: 40,//设置右下圆角大小
    borderBottomWidth: 2,//设置底部边框的粗细大小
    //borderColor:'green',//设置所有边框颜色
    borderLeftColor: 'green',//设置左边框颜色
    borderLeftWidth: 5,//设置左边框粗细大小
    //borderRadius : 10,//设置正题边框圆角大小
    //borderRightColor
    //borderRightWidth
    borderStyle: 'solid',//设置边框样式'solid', 'dotted', 'dashed'
    //borderTopColor color
    //borderTopLeftRadius ReactPropTypes.number
    //borderTopRightRadius ReactPropTypes.number
    //borderTopWidth ReactPropTypes.number
    //borderWidth ReactPropTypes.number
    overflow: 'visible',//设置内容超过容器显示还是隐藏'visible', 'hidden'
    opacity: 0.5,//设置透明度
  }
});
