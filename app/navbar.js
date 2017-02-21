import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;

export default class NavBack extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <TouchableHighlight onPress={this.props.back} underlayColor='transparent'>        
          <Image
              style={{marginLeft:20,marginTop:25,height:30}}
              source={require('./images/nav_back.png')}
          />
        </TouchableHighlight>
              <View style={styles.topBarTitleView}>
                <Text style={styles.topBarTitle}>
                  {this.props.name}
                </Text>
            </View>
          </View>
    );
  }
};

const styles = StyleSheet.create({
  topBar: {
    height: 64,
    backgroundColor: '#139efe',
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  topBarTitleView: {
    marginTop: 20,
    height: 44,
    width: ScreenWidth - 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  topBarTitle: {
    fontSize: 22,
    color: 'white'
  },
});