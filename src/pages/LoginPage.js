import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export default class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput name = "username" type = "text" placeholder = "User Name" style = {styles.input}/>
        <TextInput name = "password" type = "password" placeholder = "Password" style = {styles.input} />
        <Button type = "button" title = "Enter" onPress = {this.onSubmitPressed} style = {styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  input: {
    width: 320
  }
});

AppRegistry.registerComponent('LoginPage', () => LoginPage);
