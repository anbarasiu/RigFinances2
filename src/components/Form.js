// @flow
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class Form extends Component {
  componentWillMount() {
    // this.fields = [];
    this.traverseFields(this.props.children);
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
      <View>
        {this.props.children}
      </View>
    );
  }
}

AppRegistry.registerComponent('Form', () => Form);
