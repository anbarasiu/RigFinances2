// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Grid, Col } from 'native-base';
import { renderComponent } from '../utils';

export default class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.data.category || '',
      subcategory: this.props.data.subcategory || '',
      spenton: this.props.data.spenton || ''
    };
    this.updateValue = this.updateValue.bind(this);
  }

  state: {
    category: string,
    subcategory: string,
    spenton: string
  };

  props: {
    content: Array<any>,
    columnStyle?: Object,
    onExpenseItemUpdate: Function
  };

  updateValue: Function;
  updateValue(id: string, selectedValue: any) {
    try {
      throw new Error('test');
    } catch (e) {
      // this.setState({ [id]: selectedValue });
      this.props.onExpenseItemUpdate({ [id]: selectedValue });
    }
  }

  render() {
    const content = this.props.content;
    return (
      <Grid>
        {content.map((c, index) => {
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
                this.state[c.id] !== undefined ? this.state[c.id] : index + 1,
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
