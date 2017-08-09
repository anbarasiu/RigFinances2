// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Container,
  Text,
  Content,
  Button,
  Form,
  Item,
  Label
} from 'native-base';
import boreDetailsContent from '../content/boreDetails';
import FormHeader from '../components/FormHeader';
import { renderComponent } from '../utils';

export default class BoreDetailsPage extends Component {
  static navigationOptions = {
    title: 'Bore Details'
  };

  constructor() {
    super();
    this.state = {
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
  }

  state: {
    type: string,
    hammerSize: string,
    bitSize: string,
    pipeMaterial: string,
    pipeSize: string,
    bitLoss: boolean,
    customer: string
  };

  onSubmitPressed() {
    console.log(this);
  }

  updateValue(id, selectedValue) {
    this.setState({ [id]: selectedValue });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <FormHeader />
            {boreDetailsContent.map((b, index) => {
              return (
                <Item>
                  <Label>
                    {b.field}
                  </Label>
                  {renderComponent(
                    b.id,
                    b.type,
                    {},
                    b.items,
                    this.state[b.id] !== undefined
                      ? this.state[b.id]
                      : index + 1,
                    this.updateValue
                  )}
                </Item>
              );
            })}
            <Button type="button" onPress={this.onSubmitPressed} block>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('BoreDetailsPage', () => BoreDetailsPage);
