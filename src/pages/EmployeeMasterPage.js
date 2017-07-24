import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  ScrollView
} from 'react-native';
import FormHeader from '../components/FormHeader';
import content from '../content/employeeDetails';
import {renderComponent, setResponsiveGrid} from '../utils';

export default class EmployeeMasterPage extends Component {
  static navigationOptions = {
    title: 'Employee Master',
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.columns = setResponsiveGrid(2);
  }

  onSubmitPressed() {
    // Navigate to navigation activity
    const { navigate } = this.props.navigation;
    navigate('Navigation');
  }

  render() {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
        <FormHeader />
        {
          content.map((c) => {
            return (
              <View style={styles.row}>
                <Text style={this.columns}>{c.field}</Text>
                {renderComponent(c.type, this.columns)}
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('EmployeeMasterPage', () => EmployeeMasterPage);
