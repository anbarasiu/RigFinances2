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
import {vh, vw} from '../utils';

export default class TabView extends Component {
  constructor() {
    super();
    this.onTabSelected = this.onTabSelected.bind(this);

    const COLUMNS = 6;
    const MARGIN = vw(1);
    const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

    this.tab = {
      marginLeft: MARGIN,
      marginTop: MARGIN,
      width: vw(100) / COLUMNS - SPACING,
      height: 50,
      backgroundColor: '#2756A4'
    };
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
    backgroundColor: '#162E3E',
    height: 50
  },
  tabText: {
    fontSize: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('TabView', () => TabView);
