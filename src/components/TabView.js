import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import items from '../constants';
import {setResponsiveGrid} from '../utils';

export default class TabView extends Component {
  constructor() {
    super();
    this.onTabSelected = this.onTabSelected.bind(this);

    const columns = 6;
    this.tab = setResponsiveGrid(columns);
  }

  onTabSelected() {
    // Navigate to selected activity
    const { navigate } = this.props.navigation;
    navigate(items[index].page);
  }

  render() {
    return (
      <View style = {styles.grid}>
        {
          items.map((i, index) => {
            return(
              <TouchableHighlight onPress={this.onTabSelected} style = {this.tab}>
                <Text style={styles.tabText}>{i.name}</Text>
              </TouchableHighlight>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#162E3E'
  },
  tabText: {
    fontSize: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('TabView', () => TabView);
