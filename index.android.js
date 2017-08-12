import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import App from './src/routes';

export default class SivagamiBorewells extends Component {
  render() {
    return <LoginPage />;
  }
}

AppRegistry.registerComponent('SivagamiBorewells', () => App);
