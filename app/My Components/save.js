/**
 * 
 */
//callback return 0 is true 
//callback return 1 is false 
import React, {
	Component
} from 'react';
import {
	AsyncStorage
} from 'react-native';
export default class Save extends Component {
	static save(key, value, callback) {
		//保存成字符串才能存储
		// this.saveSex(key, 'JSON.stringify(value)');
		AsyncStorage.setItem(key, value, function(errs) {
			if (errs) {
				console.log('存储错误');
				alert('保存失败！');
				callback(1);
			}
			if (!errs) {
				console.log('存储无误');
				// alert('保存成功！');
				callback(0);
			}
		})
	};

	static getValue(key, callback) {
		AsyncStorage.getItem(key)
			.then( //使用Promise机制的方法
				(result) => { //使用Promise机制,如果操作成功不会有error参数
					if (result == null) {
						alert('没有指定的key');
						callback(1);
					} else {
						callback(result);
						// alert(result);
					}

				}
			).catch((error) => { //读取操作失败
				alert('提取失败！' + error);
				callback(1);
			});
	};

	static remove(key, callback) {
		AsyncStorage.removeItem(key, function(errs) {
			if (!errs) {
				callback(0);
			} else {
				callback(1);
			}
		});
	}

}