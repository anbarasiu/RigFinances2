// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label
} from 'native-base';
import FormHeader from '../components/FormHeader';
import content from '../content/employeeDetails';
import renderComponent from '../utils';

export default class EmployeeDetailsPage extends Component {
  static navigationOptions = {
    title: 'Employee Details'
  };

  constructor() {
    super();
    this.state = {
      name: '',
      process: '',
      date: ''
    };
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  state: {
    name: string,
    process: string,
    date: string
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
            {content.map((c, index) => {
              return (
                <Item>
                  <Label>
                    {c.field}
                  </Label>
                  {renderComponent(c.type, this.columns)}
                </Item>
              );
            })}
            <Button
              type="button"
              title="Submit"
              onPress={this.onSubmitPressed}
              block
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('EmployeeDetailsPage', () => EmployeeDetailsPage);
