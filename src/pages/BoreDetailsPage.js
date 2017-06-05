import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
import TabView from '../components/TabView';

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <View style = {styles.container}>
        <TabView />
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

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
