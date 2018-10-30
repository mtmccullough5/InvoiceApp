import React, { Component } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react'

class ListItem extends Component {
  render() {
    return (
      <Container>
        <span placeholder="Item Name"></span>
        <span placeholder="Item Quantity"></span>
        <span placeholder="Item Cost"></span>
        <span></span>
        <Button icon>
          <Icon name='trash'/>
        </Button>
      </Container>
    );
  }
}

export default ListItem