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
  state = {name: "Spargel", time: "180"}

  handleName = (text) => {
    this.setState({name: text});
  }

  handleTime = (text) => {
    this.setState({time: text});
  }

  handleSave = () => {
    this.props.screenProps.addTimer(this.state.name, this.state.time);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <NameInput onChange={this.handleName} default={this.state.name} />
        <TimerInput onChange={this.handleTime} default={this.state.time}/>
        <Button
          title="Speichern"
          onPress={this.handleSave}
        />
      </View>
    );
  }
}
module.exports = CreateTimerView;
