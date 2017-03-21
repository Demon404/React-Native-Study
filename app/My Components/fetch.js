/**
 * 
 */
//callback return 0 is true 
//callback return 1 is false 
import React, {
	Component
} from 'react';
let BaseUrl = 'http://124.127.200.29:8088/ws/api/';

export default class Fetch extends Component {

	static get(url, callback) {
		// console.log(BaseUrl + url);
		fetch(BaseUrl + url)
			//ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
			.then((response) => response.json())
			.then((responseData) => {
				// console.log(responseData);
				if (responseData) {
					callback(responseData);
				} else {
					//don nothing
					callback(0);
				}
			})
			.catch((error) => {
				callback(1);
			})
	}
	static post(url, contentType, json, callback) {

		fetch(BaseUrl + url, {
				method: 'POST',
				headers: {
					'Content-Type': (contentType == '') ? 'application/x-www-form-urlencoded' : contentType,
				},
				body: json
			})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData == '' || responseData == null) {
					callback(0);
				} else {
					callback(responseData);
				}
			})
			.catch((error) => {
				alert(error);
				callback(1);
			})
	}
}