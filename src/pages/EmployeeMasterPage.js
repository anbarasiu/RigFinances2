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

export default class EmployeeMasterPage extends Component {
  static navigationOptions = {
    title: 'Employee Master'
  };

  constructor() {
    super();
    this.state = {
      name: '',
      designation: '',
      salary: ''
    };
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  state: {
    name: string,
    designation: string,
    salary: number
  };

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
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

AppRegistry.registerComponent('EmployeeMasterPage', () => EmployeeMasterPage);
