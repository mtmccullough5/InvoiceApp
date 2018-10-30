import React, { Component } from 'react';
import { Button, Container, Input, Icon } from 'semantic-ui-react'

class NewItem extends Component {
  onSubmit() {

  }

  render() {
    return (
      <Container>
        <Input placeholder="Item Name"></Input>
        <Input placeholder="Item Quantity"></Input>
        <Input placeholder="Item Cost"></Input>
        <span></span>
        <Button icon>
          <Icon name='save'/>
        </Button>
      </Container>
    );
  }
}

export default NewItem