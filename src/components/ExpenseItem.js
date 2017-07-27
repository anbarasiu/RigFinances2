import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text,
  Picker
} from 'react-native';
import { setResponsiveGrid } from '../utils';

export default class ExpenseItem extends Component {
  constructor() {
    super();
    this.columns = setResponsiveGrid(9);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(index) {
    this.props.content[index].items.map(c => {
      return <Picker.Item label={c} value={c} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={this.props.columnStyle}>
          {this.props.index}
        </Text>
        <Picker style={this.props.columnStyle}>
          {this.renderContent(1)}
        </Picker>
        <Picker style={this.props.columnStyle}>
          {this.renderContent(2)}
        </Picker>
        <TextInput style={this.props.columnStyle} keyboardType="numeric" />
        <TextInput style={this.props.columnStyle} />
        <Picker style={this.props.columnStyle}>
          {this.renderContent(5)}
        </Picker>
        <TextInput style={this.props.columnStyle} keyboardType="numeric" />
        <TextInput style={this.props.columnStyle} keyboardType="numeric" />
        <TextInput style={this.props.columnStyle} keyboardType="numeric" />
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
