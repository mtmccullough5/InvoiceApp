import React, { Component } from 'react';
import { Button, Input, Icon, Table, Label } from 'semantic-ui-react';
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
      <Table.Row>
        <Table.Cell textAlign="left" width="7">
          <Input 
              id="itemName" 
              placeholder="New Item"
              fluid
              onChange={this.handleChange}
            />
        </Table.Cell>
        <Table.Cell textAlign="center" width="2">
          <Input 
            id="itemQuantity" 
            placeholder="X"
            fluid
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell textAlign="center" width="3">
          <Input 
            id="itemCost" 
            placeholder="X.XX"
            fluid 
            type="text"
            onChange={this.handleChange} 
          />
        </Table.Cell>
        <Table.Cell textAlign="center" width="3">
          <Input disabled fluid/>
        </Table.Cell>
        <Table.Cell width="1">
          <Button icon onClick={this.handleSubmit}>
            <Icon name='save'/>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default connect()(NewItem)