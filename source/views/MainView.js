import React, {Component} from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import TimerList from './TimerList';
import CreateTimerView from './CreateTimerView';
  
const BasicApp = StackNavigator({
  Main: {screen: TimerList},
  CreateTimer: {screen: CreateTimerView},
});

module.exports = BasicApp;
