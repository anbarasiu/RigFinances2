import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export default class NavigationPage extends Component {

  constructor() {
    super();
    this.items = [
      { name: 'Expenses', page: 'Expenses' },
      { name: 'Borewell', page: 'Borewell' },
      { name: 'Reports', page: 'Reports' },
      { name: 'EmployeeDetails', page: 'EmployeeDetails' }
    ];
  }

  onTileSelected() {
    // Navigate to selected activity

  }

  render() {
    return (
      <View style = {styles.container}>
        {
          this.items.map((i) => {
            return(
              <Tile imgSrc = '' name = {i.name} link = {i.page} />
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // TODO: Grid styling
  }
});

AppRegistry.registerComponent('NavigationPage', () => NavigationPage);
