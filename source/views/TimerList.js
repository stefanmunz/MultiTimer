import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableHighlight } from 'react-native';
import styles, {constants} from '../../styles.js';
import Timer from '../components/Timer.js';

class TimerList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Timers',
      headerRight: <Button title="Create" onPress={() => navigation.navigate('CreateTimer', { name: 'Jane' }) } />,
    });

  _keyExtractor = (item, index) => index;

  render() {
    console.log(this.props.screenProps)
    return (
      <FlatList
        data={this.props.screenProps.timers}
        renderItem={ ({item}) => {
          return (
            <Timer timer={item} currentTime={this.props.screenProps.currentTime} onStart={this.handleStart} />
          );
        }}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

module.exports = TimerList;
