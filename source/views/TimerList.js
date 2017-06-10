import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight } from 'react-native';
import styles, {constants} from '../../styles.js';

class TimerList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Timers',
      headerRight: <Button title="Create" onPress={() => navigation.navigate('CreateTimer', { name: 'Jane' }) } />,
    });
  render() {
    return (
      <Button
        title="Go to dddJane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

module.exports = TimerList;
