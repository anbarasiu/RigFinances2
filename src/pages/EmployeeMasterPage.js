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
import commonStyles from '../utils/styles';

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
          content.map((c, index) => {
            return (
              <View key={index} style={styles.row}>
                <Text style={this.columns}>{c.field}</Text>
                {renderComponent(c.type, this.columns)}
              </View>
            );
          })
        }
        <Button type = "button" title = "Submit" onPress = {this.onSubmitPressed} style = {styles.submit} />
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
  row: commonStyles.row,
  submit: commonStyles.submit
});

AppRegistry.registerComponent('EmployeeMasterPage', () => EmployeeMasterPage);
