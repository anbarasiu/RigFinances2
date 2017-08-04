import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Button, Text, Form } from 'native-base';
import FormHeader from '../components/FormHeader';
import content from '../content/employeeDetails';
import { renderComponent } from '../utils';
import commonStyles from '../utils/styles';

export default class EmployeeDetailsPage extends Component {
  static navigationOptions = {
    title: 'Employee Details'
  };

  constructor() {
    super();
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
  }

  onSubmitPressed() {
    console.log(this);
  }

  render() {
    return (
      <Container>
        <Form>
          <FormHeader />
          {content.map((c, index) => {
            return (
              <Container key={index} style={styles.row}>
                <Text style={this.columns}>
                  {c.field}
                </Text>
                {renderComponent(c.type, this.columns)}
              </Container>
            );
          })}
          <Button
            type="button"
            title="Submit"
            onPress={this.onSubmitPressed}
            style={styles.submit}
          >
            <Text>Submit</Text>
          </Button>
        </Form>
      </Container>
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

AppRegistry.registerComponent('EmployeeDetailsPage', () => EmployeeDetailsPage);
