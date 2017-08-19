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
import { Col, Row, Grid } from 'react-native-easy-grid';
import FormHeader from '../components/FormHeader';
import content from '../content/employeeDetails';
import { renderComponent, getCurrentDateString } from '../utils';

export default class EmployeeDetailsPage extends Component {
  static navigationOptions = {
    title: 'Employee Details'
  };

  constructor() {
    super();
    this.state = {
      date: '',
      name: '',
      process: '',
      date: getCurrentDateString()
    };
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  state: {
    date: string,
    name: string,
    process: string,
    date: string
  };

  setDate: Function;
  setDate(date: string) {
    this.setState({ date });
  }

  onSubmitPressed: Function;
  onSubmitPressed() {
    console.log(this);
  }

  updateValue: Function;
  updateValue(id: string, selectedValue: any) {
    this.props.onEmployeeItemUpdate(this.state.date, { [id]: selectedValue });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <FormHeader setDate={this.setDate} />
            {content.map((c, index) => {
              return (
                <Item>
                  <Col size={1}>
                    <Label>
                      {c.field}
                    </Label>
                  </Col>
                  <Col size={3}>
                    {renderComponent(
                      c.id,
                      c.type,
                      {},
                      c.items,
                      this.state[c.id] !== undefined
                        ? this.state[c.id]
                        : index + 1,
                      this.updateValue
                    )}
                  </Col>
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
