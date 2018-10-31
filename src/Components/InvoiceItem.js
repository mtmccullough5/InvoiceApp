import React from 'react';
import { Button, Icon, Table, Input } from 'semantic-ui-react';
import { deleteItem } from '../reduckx';
import { connect } from 'react-redux';

const InvoiceItem =({item}) => {
  return(
    <Table.Row>
      <Table.Cell selectable>
        <Input placeholder={item.itemName} transparent/>
      </Table.Cell>
      <Table.Cell selectable>
        <Input placeholder={item.itemQuantity} transparent/>
      </Table.Cell>
      <Table.Cell selectable>
        <Input placeholder={item.itemCost} transparent/>
      </Table.Cell>
      <Table.Cell>
        {item.lineCost}
      </Table.Cell>
      <Table.Cell>
        <Button icon>
          <Icon name='trash'/>
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(deleteItem(id))
    }
  }
}
export default connect(null,mapDispatchToProps)(InvoiceItem)