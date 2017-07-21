import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';
import Tile from '../components/Tile';
import items from '../constants';
import {vh, vw} from '../utils';

export default class NavigationPage extends Component {

  constructor() {
    super();
    this.onTileSelected = this.onTileSelected.bind(this);

    const COLUMNS = 3;
    const MARGIN = vw(1);
    const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

    this.tile = {
      marginLeft: MARGIN,
      marginTop: MARGIN,
      width: vw(100) / COLUMNS - SPACING,
      height: 150
    };
  }

  onTileSelected(index) {
    // Navigate to selected activity
    const { navigate } = this.props.navigation;
    navigate('Content', {tab: items[index].page});
  }

  render() {
    return (
      <View style = {styles.grid}>
        {
          items.map((i, index) => {
            return(
              <Tile imgSrc = '' name = {i.name} link = {i.page} tileStyle={this.tile} onTileSelected={() => this.onTileSelected(index)} />
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
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

AppRegistry.registerComponent('NavigationPage', () => NavigationPage);
