import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export default class Tile extends Component {
  constructor() {
    this.onTileSelected = this.onTileSelected.bind(this);
  }

  onTileSelected() {
    // Navigate to selected activity
    // props.link
  }

  render() {
    return (
      <View style = {styles.container} onClick={this.onTileSelected}>
        <img style = {styles.tileImg} src={props.imgSrc} />
        <div style = {styles.tileText}>{props.name}</div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tileImg: {
    position: relative
  },
  tileText: {
    position: absolute,
    color: white
  }
});

AppRegistry.registerComponent('Tile', () => Tile);
