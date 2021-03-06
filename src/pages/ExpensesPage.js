// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FormHeader from '../components/FormHeader';
import ExpenseItem from '../components/ExpenseItem';
import expensesContent from '../content/expenses';
import { formatDateEntry, getCurrentDateString } from '../utils';

export default class ExpensesPage extends Component {
  static navigationOptions = {
    title: 'Expenses'
  };

  constructor(props: Object) {
    super(props);
    this.onSubmitPressed = this.onSubmitPressed.bind(this);
    this.addExpenseItem = this.addExpenseItem.bind(this);
    this.closeExpenseItem = this.closeExpenseItem.bind(this);
    this.onExpenseItemUpdate = this.onExpenseItemUpdate.bind(this);
    this.setDate = this.setDate.bind(this);
    this.state = {
      date: '',
      isModalOpen: false,
      selectedIndex: 0,
      itemCount: 0
    };
  }

  state: {
    date: string,
    isModalOpen: boolean,
    itemCount: number,
    selectedIndex: number
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
  onExpenseItemUpdate(data: Object) {
    this.props.onExpenseItemUpdate(this.state.date, data);
  }

  props: {
    data: Object,
    onExpenseItemUpdate: Function
  };

  addExpenseItem: Function;
  addExpenseItem() {
    this.setState({ itemCount: this.state.itemCount + 1 });
    this.setState({ isModalOpen: true });
  }

  closeExpenseItem: Function;
  closeExpenseItem() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const formattedDate = formatDateEntry(getCurrentDateString());
    const expenseItems = this.props.data[formattedDate] || [{}];
    return (
      <Container>
        <FormHeader setDate={this.setDate} />
        <ExpenseItem
          isOpen={this.state.isModalOpen}
          close={this.closeExpenseItem}
          key={this.state.itemCount}
          sno={this.state.itemCount}
          data={expenseItems[this.state.selectedIndex]}
          content={expensesContent}
          onExpenseItemUpdate={this.onExpenseItemUpdate}
        />
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
          {expenseItems.map((e, index) =>
            <Row key={index}>
              {expensesContent.map((c, index) => {
                const id = c.id;
                return (
                  <Col key={index}>
                    <Text>
                      {e[id]}
                    </Text>
                  </Col>
                );
              })}
            </Row>
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
