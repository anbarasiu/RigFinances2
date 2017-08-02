import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import Tile from '../components/Tile';
import items from '../constants';

export default class NavigationPage extends Component {
  constructor() {
    super();
    this.onTileSelected = this.onTileSelected.bind(this);
  }

  onTileSelected(index) {
    // Navigate to selected activity
    const { navigate } = this.props.navigation;
    navigate('Content', { tab: items[index].page });
  }

  render() {
    return (
      <Container>
        <Grid>
          {items.map((i, index) => {
            return (
              <Col>
                <Tile
                  imgSrc=""
                  name={i.name}
                  key={index}
                  link={i.page}
                  tileStyle={this.tile}
                  onTileSelected={() => this.onTileSelected(index)}
                />
              </Col>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

AppRegistry.registerComponent('NavigationPage', () => NavigationPage);
