/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import LoginPage from './src/pages/LoginPage';

export default class SivagamiBorewells extends Component {
  render() {
    return (
      <View>
        <LoginPage />
      </View>
    );
  }
}

AppRegistry.registerComponent('SivagamiBorewells', () => SivagamiBorewells);
