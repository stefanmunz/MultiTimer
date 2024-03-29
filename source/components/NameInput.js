import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight } from 'react-native';
import styles, {constants} from '../../styles.js';

class NameInput extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
          defaultValue={this.props.default}
          onChangeText={this.props.onChange}
        />
      </View>
    );
  }
}

module.exports = NameInput;
