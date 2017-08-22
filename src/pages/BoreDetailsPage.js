// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Text, Content, Button, Item, Label } from 'native-base';
import boreDetailsContent from '../content/boreDetails';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FormHeader from '../components/FormHeader';
import processForm from '../components/Form';
import { renderComponent } from '../utils';

class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details'
  };

  constructor() {
    super();
    this.state = {
      date: '',
      type: '',
      hammerSize: '',
      bitSize: '',
      pipeMaterial: '',
      pipeSize: '',
      bitLoss: false,
      customer: ''
    };
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  state: {
    date: string,
    type: string,
    hammerSize: string,
    bitSize: string,
    pipeMaterial: string,
    pipeSize: string,
    bitLoss: boolean,
    customer: string
  };

  onSubmitPressed: Function;
  onSubmitPressed() {
    console.log(this);
  }

  setDate: Function;
  setDate(date: string) {
    this.setState({ date });
  }

  updateValue: Function;
  updateValue(id: string, selectedValue: any) {
    this.setState({ [id]: selectedValue });
    this.props.onBoreItemUpdate(this.state.date, { [id]: selectedValue });
  }

  render() {
    return (
      <Content>
        <FormHeader setDate={this.setDate} />
        {boreDetailsContent.map((b, index) => {
          return (
            <Item>
              <Col size={1}>
                <Label>
                  {b.field}
                </Label>
              </Col>
              <Col size={3}>
                {renderComponent(
                  b.id,
                  b.type,
                  {},
                  b.items,
                  this.state[b.id] !== undefined ? this.state[b.id] : index + 1,
                  this.updateValue,
                  b.validation
                )}
              </Col>
            </Item>
          );
        })}
      </Content>
    );
  }
}

export default processForm(BoreDetailsPage);

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
