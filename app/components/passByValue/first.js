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
//引入第二页
import SecondPage from './second';
import NavBar from '../../navbar';

import MyView from './myview';

let ScreenHeight = Dimensions.get('window').height - 64;

class FirstPage extends Component {
	componentWillMount() {
		this.setState({
			callbackValue: '',
			emitterValue: ''
		});
	}

	componentDidMount() {
			//接受消息
			DeviceEventEmitter.addListener('emitter', (value) => {
				this.setState({
					emitterValue: value
				});
			})
		}
		//这里是push到下一页传值，通过params传递到第二页
	_SecondPage() {
		this.props.navigator.push({
			component: SecondPage,
			params: {
				secondValue: '这是传递到第二页的数据', //第二页通过this.props.secondValue获取secondValue的值。

				//回调
				callback: ((word) => {
					this.setState({
						callbackValue: word
					})
				})
			}
		})
	};

	sonClassFunc(value) {
		alert(value);
	}

	render() {
		return (
			<View>
			<NavBar name='这是第一页' back={()=>{this.props.navigator.pop()}}/>
			<View style={styles.container}>
            {/*点击下面这行文字把'这是传递到第二页的数据'这句话传递给第二页*/}
            	<Text style={{marginTop:100,color:'red'}} onPress={this._SecondPage.bind(this)}>点击这行文字把secondValue的值传到下一页</Text>
         		
         		{/*下面这行是回调*/}
         		<Text style={{marginTop:100}}>{this.state.callbackValue}</Text>
				{/*下面这行是通知*/}
				<Text style={{marginTop:100}}>{this.state.emitterValue}</Text>

				{/*value是我们子空间传递过来的值*/}	
				<MyView callBackFunc={(value)=>{this.sonClassFunc(value)}}/>
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


export default FirstPage;