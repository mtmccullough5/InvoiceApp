import React, {Component} from 'react';
import { Button, Icon, Table, Input } from 'semantic-ui-react';
import { updateItem, deleteItem } from '../reduckx';
import { connect } from 'react-redux';

class InvoiceItem extends Component {
  state = {}

  componentDidMount(){
    this.setState(this.props.item)
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

  handleUpdate = (event) => {
    const { dispatch } = this.props
    event.preventDefault()
    dispatch(updateItem(this.state))
  }

  handleDelete = (event) => {
    const { dispatch } = this.props
    event.preventDefault() 
    dispatch(deleteItem(this.state.id))
  }

  render() {
    let item = this.state
    return(
      <Table.Row>
        <Table.Cell selectable textAlign="left" width="7">
          <Input 
            id="itemName"
            placeholder={item.itemName}
            transparent
            fluid
            onChange={this.handleChange} 
            onBlur={this.handleUpdate}
          />
        </Table.Cell>
        <Table.Cell selectable textAlign="center" width="2">
          <Input 
            id="itemQuantity"
            placeholder={item.itemQuantity} 
            transparent
            fluid
            onChange={this.handleChange} 
            onBlur={this.handleUpdate}
          />
        </Table.Cell>
        <Table.Cell selectable textAlign="center" width="3">
          <Input 
            id="itemCost"
            placeholder={item.itemCost}
            transparent
            fluid
            onChange={this.handleChange} 
            onBlur={this.handleUpdate}
          />
        </Table.Cell>
        <Table.Cell textAlign="center" width="3">
          {item.lineCost}
        </Table.Cell>
        <Table.Cell width="1">
          <Button icon onClick={this.handleDelete}>
            <Icon name='trash'/>
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default connect()(InvoiceItem)