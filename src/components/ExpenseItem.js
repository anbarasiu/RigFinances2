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
                this.state[id],
                // c.handler && this[`${id}Handler`]
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
