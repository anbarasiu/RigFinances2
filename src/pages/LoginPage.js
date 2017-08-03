// @flow
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

  props: {
    navigation: Object
  };

  render() {
    return (
      <Container>
        <Form style={{ marginTop: 50 }}>
          <Item>
            <Label>Username</Label>
            <Input name="username" type="text" />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input name="password" type="password" />
          </Item>
          <Button
            style={{ marginTop: 50 }}
            type="button"
            block
            onPress={this.onSubmitPressed}
          >
            <Text>Enter</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

AppRegistry.registerComponent('LoginPage', () => LoginPage);
