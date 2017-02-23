 'use strict';

 import React, {
 	Component
 } from 'react';

 import {
 	StyleSheet,
 	View,
 	ListView,
 	Dimensions,
 	Image,
 	TouchableOpacity,
 	Text
 } from 'react-native';
 let ScreenHeight = Dimensions.get('window').height - 64;
 let WIDTH = Dimensions.get('window').width;

 var GET_URL = 'https://api.douban.com/v2/movie/top250'; //豆瓣电影排行榜

 import NavBar from '../navbar';

 class List extends Component {
 	/**
 	 * get解析，获取豆瓣电影的资源
 	 */
 	//初始化的时候拉数据
 	componentDidMount() {
 		this.fetchData();
 	}

 	fetchData() {
 		fetch(GET_URL)
 			//ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
 			.then((response) => response.json())
 			.then((responseData) => {
 				this.setState({
 					dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
 				});
 			})
 			.done();
 	}

 	constructor(props) {
 		super(props);
 		this.state = {
 			dataSource: new ListView.DataSource({
 				rowHasChanged: (row1, row2) => row1 !== row2,
 			}),
 		};
 	}
 	cellRow(data) {
 		return (
 			<TouchableOpacity onPress={()=>this.rowPressed(data)}>
          <View>
            <View style={styles.cellStyle}>
                <Image style={{margin:10,width:100, resizeMode:'contain',height:(WIDTH-40)/2}}
                       source={{uri: data.images.large}}
                />
                <Text style={styles.title}>{data.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
 		);
 	}
 	rowPressed(rowdata) {
 		// this.props.navigator.push({
 		//   component: Detail,
 		//   params: {
 		//     nextdata: rowdata
 		//   },
 		// })
 	}
 	render() {
 		return (
 			<View style={styles.container}>
				<NavBar name='ListView' back={()=>{this.props.navigator.pop()}}/>
				<ListView
            		initiaListSize={2}
            		pageSize={2}
            		dataSource={this.state.dataSource}
            		renderRow={this.cellRow.bind(this)}
            		style={styles.listView}
        		/>
				
			</View>
 		);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1
 	},
 	title: {
 		fontSize: 16,
 		textAlign: 'left',
 		margin: 10,
 		marginTop: 0,
 	},
 	cellStyle: {
 		justifyContent: 'center',
 		alignItems: 'center',
 		margin: 10,
 		backgroundColor: 'white',
 		borderRadius: 10,
 	},
 	listView: {
 		backgroundColor: 'gainsboro',
 		flex: 1,
 	}
 });


 export default List;