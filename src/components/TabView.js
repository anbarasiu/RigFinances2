import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image
} from 'react-native';
import {items} from '../constants';

export default class TabView extends Component {
  constructor() {
    super();
    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected() {
    // Navigate to selected activity
    navigate(items[index].page);
  }

  render() {
    return (
      <View style = {styles.container}>
        {
          items.map((i, index) => {
            return(
              <View style={styles.tile} onClick={this.onTileSelected(index)} >
                {i.name}
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  tab: {

  }
});

AppRegistry.registerComponent('TabView', () => TabView);
