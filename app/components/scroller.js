import React, {
  Component
} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height - 64;

import NavBar from '../navbar';


export default class Scroller extends Component {
  //上面这个是横向滚动，下面这个是纵向滚动
  //styles和contentContainerStyle不一样,
  //contentContainerStyle:这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内。
  //horizontal:布尔值类型，当此属性为true的时候，所有的的子视图会在水平方向上排成一行，默认为false
  //keyboardDismissMode:用户拖拽滚动视图的时候，是否要隐藏软键盘，默认为不隐藏'none', "interactive", 'on-drag'
  //keyboardShouldPersistTaps:当此属性为false的时候，在软键盘激活之后，点击焦点文本输入框以外的地方，键盘就会隐藏。
  //                          如果为true，滚动视图不会响应点击操作，并且键盘不会自动消失。默认值为false。

  _scroller() {
      console.log("横向滚动");
    }
    //showsHorizontalScrollIndicator:bool值是否显示一个水平方向的滚动条
    //showsVerticalScrollIndicator :bool值是否显示一个竖直方向的滚动条
  render() {
    return (
      <View>
        <NavBar name='ScrollView' back={()=>{this.props.navigator.pop()}}/>
        <View style={styles.container}>
          <ScrollView style={styles.scrollV}
                    contentContainerStyle={styles.contentContainer}
                    horizontal={true}
                    keyboardDismissMode='none'
                    keyboardShouldPersistTaps={false}
                    onScroll={this._scroller}
                    >
          <Text>就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样</Text>
        </ScrollView>

        <ScrollView style={styles.scroller}
                    contentContainerStyle={styles.contentContainer}
                    >
          <Text>就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样就是这样</Text>
        </ScrollView>
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
  scrollV: {
    flex: 1,
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',

  },
  scroller: {
    flex: 1,
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'red',
  },
  contentContainer: {
    shadowColor: 'red', //设置阴影颜色
    shadowOffset: {
      width: 10,
      height: 5
    }, //设置阴影面积
    shadowOpacity: 1, //设置阴影的透明度
    shadowRadius: 20, //设置阴影的圆角
  },
});