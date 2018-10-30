import React from 'react';
import { Button, Icon, List } from 'semantic-ui-react';
import { deleteItem } from '../reduckx';
import { connect } from 'react-redux';

const ListItem =({item}) => {
  return(
  <List.Item>
    <span>{item.itemName}</span>
    <span>{item.itemQuantity}</span>
    <span>{item.itemCost}</span>
    <span>{item.lineCost}</span>
    <Button icon>
      <Icon name='trash'/>
    </Button>
  </List.Item>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(deleteItem(id))
    }
  }
}
export default connect(null,mapDispatchToProps)(ListItem)