import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
import Tile from '../components/Tile';
import {items} from '../constants';

export default class NavigationPage extends Component {

  constructor() {
    super();
    this.onTileSelected = this.onTileSelected.bind(this);
  }

  onTileSelected(index) {
    // Navigate to selected activity
    navigate(items[index].page);
  }

  render() {
    return (
      <View style = {styles.container}>
        {
          items.map((i, index) => {
            return(
              <Tile imgSrc = '' name = {i.name} link = {i.page} style={styles.tile} onClick={this.onTileSelected(index)} />
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
    flexDirection: 'row'
  },
  tile: {
    flex: 1,
    color: 'black',
    backgroundColor: '#8BC34A'
  }
});

AppRegistry.registerComponent('NavigationPage', () => NavigationPage);