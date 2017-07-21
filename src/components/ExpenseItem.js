import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Picker,
} from 'react-native';
import expensesContent from '../content/expenses';

export default class ExpenseItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>{this.props.index}</Text>
        <Picker />
        <Picker />
        <TextInput keyboardType="numeric" />
        <Picker />
        <Picker />
        <TextInput keyboardType="numeric" />
        <TextInput keyboardType="numeric" />
        <TextInput keyboardType="numeric" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 100
  },
  tabText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('ExpenseItem', () => ExpenseItem);
