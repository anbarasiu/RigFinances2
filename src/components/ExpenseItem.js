// @flow
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text,
  Picker
} from 'react-native';
import { renderComponent, setResponsiveGrid } from '../utils';

export default class ExpenseItem extends Component {
  props: {
    content: Array<any>,
    columnStyle: Object
  };

  columns: Object;
  renderContent: Function;

  constructor() {
    super();
    this.columns = setResponsiveGrid(9);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(index: number) {
    this.props.content[index].items.map(c => {
      return <Picker.Item label={c} value={c} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.content.map((c, index) =>
          renderComponent(
            c.type,
            this.props.columnStyle,
            this.props.content[index].items
          )
        )}
        {/*}
        <Text style={this.props.columnStyle}>
          {this.props.index + 1}
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
        */}
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
