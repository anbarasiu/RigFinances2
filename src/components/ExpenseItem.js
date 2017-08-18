// @flow
import React, { Component } from 'react';
import {
  AppRegistry,
  Modal,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Grid, Col } from 'native-base';
import { renderComponent } from '../utils';

export default class ExpenseItem extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      sno: 0,
      category: (this.props.data && this.props.data.category) || '',
      subcategory: (this.props.data && this.props.data.subcategory) || '',
      spenton: (this.props.data && this.props.data.spenton) || '',
      modalVisible: this.props.isOpen
    };
    this.updateValue = this.updateValue.bind(this);
  }

  state: {
    category: string,
    subcategory: string,
    spenton: string,
    modalVisible: boolean
  };

  props: {
    data: Object,
    content: Array<any>,
    columnStyle?: Object,
    onExpenseItemUpdate: Function
  };

  updateValue: Function;
  updateValue(id: string, selectedValue: any) {
    this.props.onExpenseItemUpdate({ [id]: selectedValue });
  }

  render() {
    const content = this.props.content;
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
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
        <TouchableHighlight
          onPress={() => {
            this.props.close();
          }}
        >
          <Text>Save</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AppRegistry.registerComponent('ExpenseItem', () => ExpenseItem);
