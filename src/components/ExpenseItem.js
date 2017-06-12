import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image,
  DatePickerAndroid,
  TouchableHighlight
} from 'react-native';
import {setResponsiveGrid} from '../utils';

export default class ExpenseItem extends Component {
  constructor() {
    super();

    this.state = {
      date: 'Select Date'
    };
    const columns = 3;
    this.tab = setResponsiveGrid(columns);

    this.setDate = this.setDate.bind(this);
  }

  render() {
    return (
      <View style = {styles.grid}>
        <Button
          style={this.tab}
          onPress={this.setDate}
          title={this.state.date} />
        <Text style={this.tab} >Total Amount</Text>
        <Text style={this.tab} >User</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
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
