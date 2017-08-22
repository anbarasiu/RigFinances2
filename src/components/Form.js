// @flow
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Container, Text, Button } from 'native-base';

export default function processForm(WrappedComponent) {
  return class extends WrappedComponent {
    constructor() {
      super();
      this.onSubmitPressed = this.onSubmitPressed.bind(this);
    }

    componentWillMount() {
      this.fields = [];
      this.traverseFields(this.props.children);
    }

    onSubmitPressed: Function;
    onSubmitPressed() {
      console.log(this);
    }

    applyValidationRules: Function;
    applyValidationRules(el: Object) {
      if (el.required) {
        console.log(el); // Get value
      }
    }

    traverseFields: Function;
    traverseFields(children: Array<Object>) {
      React.Children.forEach(children, child => {
        if (child.props && child.props.name) {
          this.applyValidationRules(child.props);
        }
        if (
          child.props &&
          child.props.children &&
          (child.props.children.length > 0 || child.props.size)
        ) {
          this.traverseFields(child.props.children);
        }
      });
    }

    render() {
      return (
        <Container>
          <WrappedComponent />
          <Button type="button" onPress={this.onSubmitPressed} block>
            <Text>Submit</Text>
          </Button>
        </Container>
      );
    }
  };
}
