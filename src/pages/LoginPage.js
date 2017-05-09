import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export default class LoginPage extends Component {
  onSubmitPressed() {
    // Navigate to navigation activity
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput name = "username" type = "text" placeholder = "User Name" />
        <TextInput name = "password" type = "password" placeholder = "Password" />
        <Button type = "button" title = "Enter" onPress = {this.onSubmitPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('LoginPage', () => LoginPage);
