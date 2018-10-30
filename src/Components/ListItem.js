import React from 'react';
import { Button, Icon, List, ListContent } from 'semantic-ui-react';
import { deleteItem } from '../reduckx';
import { connect } from 'react-redux';

const ListItem =({item}) => {
  return(
  <List.Item>
    <ListContent>{item.itemName}</ListContent>
    <ListContent>{item.itemQuantity}</ListContent>
    <ListContent>{item.itemCost}</ListContent>
    <ListContent>{item.lineCost}</ListContent>
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