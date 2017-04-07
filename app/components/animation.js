import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Animated,
	InteractionManager
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height;
import NavBar from '../navbar';

class Animation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			animation: new Animated.ValueXY({
				x: -100,
				y: 0
			}),
		};
	}
	componentDidMount() {
		this.startAnimation();
		this.timer = setTimeout(
			() => {
				this.endAnimation();
			},
			1800
		);
	}
	startAnimation() {
		Animated.timing(this.state.animation, {
			toValue: {
				x: 0,
				y: 0
			},
			duration: 500,
			delay: 1000
		}).start();
	}
	endAnimation() {
		Animated.timing(this.state.animation, {
			toValue: {
				x: -100,
				y: 0
			},
			duration: 500,
			delay: 1000
		}).start();
	}
	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View style={styles.container}>
            <NavBar name='Animation' back={()=>{this.props.navigator.pop()}}/>
	         <Animated.View          // Special animatable View
         		style={{width:100,height:100,backgroundColor:'red',transform: this.state.animation.getTranslateTransform()}}> 
		      </Animated.View>   
      	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: ScreenHeight,
		backgroundColor: 'gainsboro',
	},
});


export default Animation;