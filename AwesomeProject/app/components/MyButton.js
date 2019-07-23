import React, { Component } from 'react';
import {View, Button, Alert} from 'react-native';
import {styles} from './MyButtonStyle';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.pressMe = this.pressMe.bind(this);
    }

    pressMe() {
        Alert.alert("Hello World!");
    }

    render() {
        return (
            <View style={styles.MyButtonStyle}>
                <Button
                    onPress={this.pressMe}
                    title="Press Me"
                />
            </View>
        );

    }
}

export default MyButton;