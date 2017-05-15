/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import NavigationPage from './src/pages/NavigationPage';

export default class SivagamiBorewells extends Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

const App = StackNavigator({
  Login: { screen: LoginPage },
  Navigation: { screen: NavigationPage }
});

AppRegistry.registerComponent('App', () => App);
