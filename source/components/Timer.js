import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight } from 'react-native';
import styles, {constants} from '../../styles.js';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {remainingTime: props.timer.time};
  }

  render() {
    console.log('i am rendered', this.props.timer)

    const { timer, currentTime } = this.props;
    let timeToShow = timer.time;
    if (timer.startTime) {
      const delta = this.props.currentTime - this.state.startTime;
      timeToShow -= delta;
    }
    return (
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>
            {this.props.timer.name}
          </Text>
          <Text style={{fontSize: 44}}>
            {timeToShow}
          </Text>
        </View>
        <View style={{flex: 0, justifyContent: 'center'}}>
          <Button
            title="Start"
            onPress={() => {}} />
        </View>
      </View>
    );
  }
}

module.exports = Timer;
