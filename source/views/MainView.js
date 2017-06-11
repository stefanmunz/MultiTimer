import React, {Component} from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import TimerList from './TimerList';
import CreateTimerView from './CreateTimerView';

const MainStack = StackNavigator({
  Main: {screen: TimerList},
  CreateTimer: {screen: CreateTimerView},
});

export default class MainView extends Component {

  state = {
    timers: [{name: "Schnitzel", time: "220"}],
    currentTime: 0
  }

  addTimer = (name, time) => {
    this.setState({
      timers: [...this.state.timers, {
        name,
        time,
        startTime: null
      }]
    })
  }

  startTimer = (timer) => {
    timer.startTime = Date.now();
  }

 loop = () => {
   this.setState({currentTime: Date.now()});
 }

componentDidMount () {
  setInterval(this.loop, 100);
}

  render() {
    return (
      <MainStack screenProps={{timers: this.state.timers,
        addTimer: this.addTimer,
        currentTime: this.state.currentTime
      startTimer: this.startTimer}} />
    )
  }
}
