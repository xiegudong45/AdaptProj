import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MyButton from './app/components/MyButton';
import MyTextInput from './app/components/MyTextInput';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>First React App</Text>
        <MyTextInput/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  font: {
    fontSize: 20,
    flexDirection: 'row',
  },
});
