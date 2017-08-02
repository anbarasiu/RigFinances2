import React, { Component } from 'react';
import { AppRegistry, DatePickerAndroid } from 'react-native';
import { Text, Button, Label } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { setResponsiveGrid } from '../utils';

export default class FormHeader extends Component {
  constructor() {
    super();

    this.state = {
      date: 'Select Date'
    };
    const columns = 3;
    this.tab = setResponsiveGrid(columns);

    this.setDate = this.setDate.bind(this);
  }

  async setDate() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ date: `${day}/${month + 1}/${year}` });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
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
          <Text style={this.tab}>Total Amount</Text>
        </Col>
        <Col>
          <Text style={this.tab}>User</Text>
        </Col>
      </Grid>
    );
  }
}

AppRegistry.registerComponent('FormHeader', () => FormHeader);
