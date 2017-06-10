/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BasicApp from './source/views/MainView.js';

export default class MultiTimer extends Component {
  render() {
    return (
      <BasicApp >
      </BasicApp>
    );
  }
}

AppRegistry.registerComponent('MultiTimer', () => MultiTimer);
