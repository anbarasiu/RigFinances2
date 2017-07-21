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

export default class FormHeader extends Component {
  constructor() {
    super();

    this.state = {
      date: 'Select Date'
    };
    const columns = 3;
    this.tab = setResponsiveGrid(columns);

    this.setDate = this.setDate.bind(this);
  }

  async setDate() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({date: `${day}/${month+1}/${year}`});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    return (
      <View style = {styles.grid}>
        <Button
          style={this.tab}
          onPress={this.setDate}
          title={this.state.date} />
        <Text style={this.tab}>Total Amount</Text>
        <Text style={this.tab}>User</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50
  },
  tabText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('FormHeader', () => FormHeader);
