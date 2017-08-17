// @flow
import React, { Component } from 'react';
import { AppRegistry, DatePickerAndroid } from 'react-native';
import { Text, Button, Label } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

export default class FormHeader extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    };
    this.props.setDate(this.state.date);

    this.setDate = this.setDate.bind(this);
  }

  state: {
    date: string
  };

  setDate: Function;
  async setDate() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ date: `${day}/${month + 1}/${year}` });
        this.props.setDate(this.state.date);
      }
    } catch (e) {
      console.warn('Cannot open date picker', e.message);
    }
  }

  render() {
    return (
      <Grid>
        <Col>
          <Button onPress={this.setDate}>
            <Label>
              {this.state.date}
            </Label>
          </Button>
        </Col>
        <Col>
          <Text>Total Amount</Text>
        </Col>
        <Col>
          <Text>User</Text>
        </Col>
      </Grid>
    );
  }
}

AppRegistry.registerComponent('FormHeader', () => FormHeader);
