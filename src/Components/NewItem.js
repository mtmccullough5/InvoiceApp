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

  numberClean = (num,x) => {
    return Number.parseFloat(num).toFixed(x)
  }
  
  handleChange = event => {
    const { id, value } = event.target;
    if (id === "itemCost") {
      const lineCostValue = this.numberClean(value*this.state.itemQuantity,2)
      const newValue = this.numberClean(value,2)
      this.setState({ [id]: newValue, lineCost:lineCostValue });
    }
    if (id === "itemQuantity") {
      const lineCostValue = this.numberClean(value*this.state.itemCost,2)
      const newValue = this.numberClean(value,0)
      this.setState({ [id]: newValue, lineCost:lineCostValue });
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

NewItem.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    itemQuantity: PropTypes.isRequired,
    itemCost: PropTypes.isRequired
  }) 
}

export default connect()(NewItem)