'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	DeviceEventEmitter
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height - 64;
import NavBar from '../../navbar';

class SecondPage extends Component {
	back() {
		DeviceEventEmitter.emit('emitter', '我是DeviceEventEmitter反向传值'); //一定要保持注册的名称一致
		this.props.callback('我是navigator反向传值');
		this.props.navigator.pop();
	}

	render() {
		return (
			<View>
			<NavBar name='这是第二页' back={()=>{this.props.navigator.pop()}}/>
			<View style={styles.container}>
            	<Text style={{marginTop:50}}>{this.props.secondValue}</Text>{/*通过this.props.secondValue获取上一个页面pramas里面secondValue的值*/}
            	<Text style={{marginTop:100,color:'red'}} onPress={this.back.bind(this)}>返回第一页</Text>
         	</View>
         	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: ScreenHeight,
		backgroundColor: 'gainsboro',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default SecondPage;