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
import content from '../content/employeeMaster';
import { renderComponent } from '../utils';

export default class EmployeeMasterPage extends Component {
  static navigationOptions = {
    title: 'Employee Master'
  };

  constructor() {
    super();
    this.state = {
      date: '',
      name: '',
      designation: '',
      salary: 0
    };
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  state: {
    date: string,
    name: string,
    designation: string,
    salary: number
  };

  setDate: Function;
  setDate(date: string) {
    this.setState({ date });
  }

  onSubmitPressed: Function;
  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
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

AppRegistry.registerComponent('EmployeeMasterPage', () => EmployeeMasterPage);
