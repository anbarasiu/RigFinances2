import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text
} from 'react-native';
import FormHeader from '../components/FormHeader';
import content from '../content/employeeDetails';
import {renderComponent} from '../utils';

export default class EmployeeDetailsPage extends Component {
  static navigationOptions = {
    title: 'Employee Details',
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
      <View style = {styles.container}>
        <FormHeader />
        {
          content.map((c) => {
            return (
              <View style={styles.row}>
                <Text>{c.field}</Text>
                {renderComponent(c.type)}
              </View>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  }
});

AppRegistry.registerComponent('EmployeeDetailsPage', () => EmployeeDetailsPage);
