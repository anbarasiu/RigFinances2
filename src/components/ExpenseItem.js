// @flow
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Picker } from 'react-native';
import { renderComponent, setResponsiveGrid } from '../utils';

export default class ExpenseItem extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      subcategory: ''
    };
    this.columns = setResponsiveGrid(9);
    this.categoryHandler = this.categoryHandler.bind(this);
    this.subcategoryHandler = this.subcategoryHandler.bind(this);
  }

  props: {
    content: Array<any>,
    columnStyle: Object
  };

  columns: Object;
  categoryHandler: Function;

  categoryHandler(selectedValue) {
    this.setState({ category: selectedValue });
  }

  subcategoryHandler(selectedValue) {
    this.setState({ subcategory: selectedValue });
  }

  render() {
    const content = this.props.content;
    return (
      <View style={styles.container}>
        {content.map(c => {
          const items =
            c.items &&
            (c.items.length ? c.items : c.items[this.state.category]);
          const id = c.id;
          return renderComponent(
            c.type,
            this.props.columnStyle,
            items,
            c.handler && this[`${id}Handler`],
            this.state[id]
          );
        })}
        {/* }
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
