import React, {
   Component
} from 'react';
import {
   View,
   StyleSheet,
   Image,
   Dimensions
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height - 64;

import NavBar from '../navbar';

export default class ImageView extends Component {
   //如果不指定图片的大小，那么默认的是图片的原大小，例如myHeader这张图片，大小为250*250，默认显示的是250*250
   //另外加载网络图片的话，必须指定图片大小,例如logo_og.png，否则会遇到无法显示的问题
   //另外如果require('./my-icon.png')}，有安卓和iOS的图片尺寸不一样，那么给图片命名为my-icon.android.png/my-icon.ios.png
   //系统会自动判断系统来加载图片
   render() {
      return (
         <View>
            <NavBar name='ImageView' back={()=>{this.props.navigator.pop()}}/>
            <View style={styles.container}>
               <Image source={require('../images/myHeader.png')}/>
               <Image style={styles.imageStyle} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
               <Image source={require('../images/myHeader.png')} style={styles.autoStyle}/>
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
   imageStyle: {
      width: 100,
      height: 100,
      // backgroundColor:'red',
   },
   autoStyle: {
      width: 320,
      height: 100,

      //cover:保持图片宽高放大显示图片，保证把Image填满，显示放大图片的中心
      //contain: 在保持图片宽高比的前提下缩放图片，完整显示图片，未填充的区域保留
      //stretch：拉伸图片,不维持宽高比，填满Image设置的大小。
      //repeat:类似于平铺效果
      resizeMode: 'cover',
      backgroundColor: 'gray',
      // tintColor: 'red',为所有非透明的像素指定一个颜色
      // borderBottomLeftRadius ReactPropTypes.number
      // borderBottomRightRadius ReactPropTypes.number
      // borderColor color
      // borderRadius number
      // borderTopLeftRadius ReactPropTypes.number
      // borderTopRightRadius ReactPropTypes.number
      borderWidth: 2, //设置边框粗细程度
      borderColor: 'black', //设置边框颜色
      borderRadius: 30, //设置圆角大小，上面几个属性表示不同位置的圆角
      opacity: 0.5, //设置透明程度，1为完全不透明
      // overflow: 'visible',//‘visible’,'hidden'当图片原始尺寸大于Image尺寸时，多余的部分是否可见
   }
});