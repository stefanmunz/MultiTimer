import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight } from 'react-native';
import styles, {constants} from '../../styles.js';
import NameInput from '../components/NameInput';
import TimerInput from '../components/TimerInput';

class CreateTimerView extends Component {
  render() {
    return (
      <View>
        <NameInput/>
        <TimerInput/>
      </View>
    );
  }
}
module.exports = CreateTimerView;
