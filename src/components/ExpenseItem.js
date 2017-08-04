// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Grid, Col } from 'native-base';
import { renderComponent } from '../utils';

export default class ExpenseItem extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      subcategory: '',
      spenton: ''
    };
    this.updateValue = this.updateValue.bind(this);
  }

  props: {
    content: Array<any>,
    columnStyle: Object,
    index: number
  };

  columns: Object;
  categoryHandler: Function;

  updateValue(id, selectedValue) {
    this.setState({ [id]: selectedValue });
  }

  render() {
    const content = this.props.content;
    return (
      <Grid>
        {content.map(c => {
          const items =
            c.items &&
            (c.items.length ? c.items : c.items[this.state.category]);
          const id = c.id;
          return (
            <Col>
              {renderComponent(
                id,
                c.type,
                this.props.columnStyle,
                items,
                this.state[id] || this.props.index + 1,
                this.updateValue
              )}
            </Col>
          );
        })}
      </Grid>
    );
  }
}

AppRegistry.registerComponent('ExpenseItem', () => ExpenseItem);
