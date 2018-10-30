import React, { Component } from 'react';
import { Button, Container, Input, Icon } from 'semantic-ui-react';
import { addItem } from '../reduckx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NewItem extends Component {
  state = { 
    itemName: "",
    itemQuantity: "",
    itemCost: "",
    lineCost: ""
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props 
    event.preventDefault()
    dispatch(addItem(this.state))
  }

  handleChange = event => {
    const { id, value } = event.target;
    if (id === "itemCost") {
      const lineCostValue = value*this.state.itemQuantity
      this.setState({ [id]: value, lineCost:lineCostValue });
    }
    if (id === "itemQuantity") {
      const lineCostValue = value*this.state.itemCost
      this.setState({ [id]: value, lineCost:lineCostValue });
    }
    else {
      this.setState({ [id]: value });
    }
  }

  render() {
  return (
      <Container>
        <Input 
          id="itemName" 
          placeholder="Item Name" 
          onChange={this.handleChange}
        />
        <Input 
          id="itemQuantity" 
          placeholder="Item Quantity"
          onChange={this.handleChange}
        />
        <Input 
          id="itemCost" 
          placeholder="Item Cost"
          onChange={this.handleChange} 
        />
        <span></span>
        <Button icon onClick={this.handleSubmit}>
          <Icon name='save'/>
        </Button>
      </Container>
    );
  }
}
export default connect()(NewItem)