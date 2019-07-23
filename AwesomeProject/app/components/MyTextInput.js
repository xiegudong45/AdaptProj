import React, { Component } from 'react';
import {View, TextInput, Text, Alert, Button} from 'react-native';
import {textStyles} from './MyTextInputStyle';
import {styles} from './MyButtonStyle';


class MyTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
    this.pressMe = this.pressMe.bind(this);
  }

  pressMe(text) {
    Alert.alert(this.state.text);
  }

  render() {
    return (
      <View>
        <View style={textStyles.MyTextStyle}>
          <TextInput
            placeholder="type anything here"
            onChangeText={
              (text) => this.setState({text : text})
            }
            value={this.state.text}
          />
        </View>

        <View style={styles.MyButtonStyle}>
          <Button
            onPress={this.pressMe}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

export default MyTextInput;