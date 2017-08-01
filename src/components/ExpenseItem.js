// @flow
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Picker } from 'react-native';
import { renderComponent, setResponsiveGrid } from '../utils';

export default class ExpenseItem extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      subcategory: '',
      spenton: ''
    };
    this.columns = setResponsiveGrid(9);
    this.categoryHandler = this.categoryHandler.bind(this);
    this.subcategoryHandler = this.subcategoryHandler.bind(this);
    this.spentonHandler = this.spentonHandler.bind(this);
    this.updateValue = this.updateValue.bind(this);
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

  spentonHandler(selectedValue) {
    this.setState({ spenton: selectedValue });
  }

  updateValue(id, selectedValue) {
    this.setState({ [id]: selectedValue });
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
            id,
            c.type,
            this.props.columnStyle,
            items,
            this.state[id],
            // c.handler && this[`${id}Handler`]
            this.updateValue
          );
        })}
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
