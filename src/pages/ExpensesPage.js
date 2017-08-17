// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import FormHeader from '../components/FormHeader';
import ExpenseItem from '../components/ExpenseItem';
import expensesContent from '../content/expenses';
import { getCurrentDateString } from '../utils';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses'
  };

  constructor(props: Object) {
    super(props);
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.onExpenseItemUpdate = this.onExpenseItemUpdate.bind(this);
    this.state = {
      date: '',
      expenseItems: (this.props.data[getCurrentDateString] &&
        this.props.data[getCurrentDateString].items) || [{}]
    };
  }

  state: {
    expenseItems: Array<Object>,
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

  onExpenseItemUpdate: Function;
  onExpenseItemUpdate(data: Array<Object>) {
    this.props.onExpenseItemUpdate(this.state.date, data);
  }

  props: {
    data: Array<Object>,
    onExpenseItemUpdate: Function
  };

  addExpenseItem: Function;
  addExpenseItem() {
    const newItems =
      this.state.expenseItems && this.state.expenseItems.concat({});
    this.setState({ expenseItems: newItems });
  }

  render() {
    return (
      <Container>
        <FormHeader setDate={this.setDate} />
        <Grid>
          {expensesContent.map((e, index) => {
            return (
              <Col>
                <Text key={index}>
                  {e.field}
                </Text>
              </Col>
            );
          })}
        </Grid>
        <Content>
          {this.state.expenseItems &&
            this.state.expenseItems.map((e, index) =>
              <ExpenseItem
                key={index}
                index={index}
                content={expensesContent}
                data={e}
                onExpenseItemUpdate={this.onExpenseItemUpdate}
              />
            )}
        </Content>
        <Button onPress={this.addExpenseItem} block>
          <Text>Add</Text>
        </Button>
        <Button
          type="button"
          title="Submit"
          onPress={this.onSubmitPressed}
          block
        >
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

AppRegistry.registerComponent('ExpensesPage', () => ExpensesPage);
