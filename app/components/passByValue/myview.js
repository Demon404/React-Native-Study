'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity
} from 'react-native';

let Value = '我要传递给主页面的数据!';

class MyView extends Component {

	render() {
		return (
			// /*Value传递给主页面，并且实现某个方法*/ 
			<TouchableOpacity onPress={()=>this.props.callBackFunc(Value)}>{/*这是我们自定义的组件，点击后在主文件实现方法*/}	
				<View  style={{width:50,height:50,backgroundColor:'blue'}}/>
			</TouchableOpacity>
		);
	}
}
export default MyView;