import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Form, Button, Input, Text, Item, Label } from 'native-base';

export default class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <Container>
        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input name="username" type="text" placeholder="User Name" />
          </Item>
          <Item fixedLabel>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" />
          </Item>
          <Button type="button" onPress={this.onSubmitPressed}>
            <Text>Enter</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

AppRegistry.registerComponent('LoginPage', () => LoginPage);
