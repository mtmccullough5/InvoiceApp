import React, { Component } from 'react';
import { Button, Input, Icon, Table } from 'semantic-ui-react';
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
        <Table.Cell>
          <Input 
              id="itemName" 
              placeholder="New Item"
              onChange={this.handleChange}
            />
        </Table.Cell>
        <Table.Cell>
          <Input 
            id="itemQuantity" 
            placeholder="X"
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Input 
            id="itemCost" 
            placeholder="X.XX"
            onChange={this.handleChange} 
          />
        </Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell>
          <Button icon onClick={this.handleSubmit}>
            <Icon name='save'/>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default connect()(NewItem)