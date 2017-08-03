// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container } from 'native-base';
import { Row, Col, Grid } from 'react-native-easy-grid';
import Tile from '../components/Tile';
import items from '../constants';

export default class NavigationPage extends Component {
  constructor() {
    super();
    this.onTileSelected = this.onTileSelected.bind(this);
  }

  onTileSelected(index: number) {
    // Navigate to selected activity
    const { navigate } = this.props.navigation;
    navigate('Content', { tab: index });
  }

  props: {
    navigation: Object
  };

  renderColumns(start: number) {
    return items.slice(start, start + 3).map((i, index) =>
      <Col size={1}>
        <Tile
          imgSrc=""
          name={i.name}
          key={index}
          link={i.page}
          onTileSelected={() => this.onTileSelected(start + index)}
        />
      </Col>
    );
  }

  render() {
    return (
      <Container>
        <Grid>
          {items.map((j, jIndex) => {
            return jIndex === 0 || jIndex % 3 === 0
              ? <Row size={1}>
                  {this.renderColumns(jIndex)}
                </Row>
              : null;
          })}
        </Grid>
      </Container>
    );
  }
}

AppRegistry.registerComponent('NavigationPage', () => NavigationPage);
