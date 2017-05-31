import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import App from './src/routes';
import NavigationPage from './src/pages/NavigationPage';

export default class SivagamiBorewells extends Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

AppRegistry.registerComponent('SivagamiBorewells', () => App);
