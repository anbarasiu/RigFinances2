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
      sno: this.props.sno,
      category: (this.props.data && this.props.data.category) || '',
      subcategory: (this.props.data && this.props.data.subcategory) || '',
      amount: (this.props.data && this.props.data.amount) || 0,
      remarks: (this.props.data && this.props.data.remarks) || '',
      quantity: (this.props.data && this.props.data.quantity) || 0,
      enginehrs: (this.props.data && this.props.data.enginehrs) || '',
      extra: (this.props.data && this.props.data.extra) || '',
      spenton: (this.props.data && this.props.data.spenton) || ''
    };
    this.updateValue = this.updateValue.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  state: {
    sno: number,
    category: string,
    subcategory: string,
    amount: number,
    remarks: string,
    quantity: number,
    enginehrs: string,
    extra: string,
    spenton: string
  };

  props: {
    sno: number,
    data: Object,
    content: Array<any>,
    columnStyle?: Object,
    onExpenseItemUpdate: Function,
    close: Function,
    isOpen: boolean
  };

  updateValue: Function;
  updateValue(id: string, selectedValue: any) {
    this.setState({ [id]: selectedValue });
  }

  saveDetails: Function;
  saveDetails() {
    this.props.onExpenseItemUpdate(this.state);
    this.props.close();
  }

  componentWillReceiveProps(nextProps: Object) {
    if (this.props.sno != nextProps.sno) {
      this.setState({ sno: nextProps.sno });
    }
  }

  render() {
    const content = this.props.content;
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.props.isOpen}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '75%',
            backgroundColor: 'white'
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
                    this.state[c.id],
                    this.updateValue
                  )}
                </Col>
              );
            })}
          </Grid>
          <TouchableHighlight
            onPress={() => {
              this.saveDetails();
            }}
          >
            <Text>Save</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

AppRegistry.registerComponent('ExpenseItem', () => ExpenseItem);
