import React from 'react';
import { Segment, List, ListContent} from 'semantic-ui-react'
import { connect } from 'react-redux';

const InvoiceTotals = (items) => {
  let taxRate = 0.05
  let subtotal = 0
  items.items.forEach((item) => {
    subtotal+=item.lineCost 
  })
  let tax = subtotal*taxRate
  let total = subtotal+tax
  return (
    <Segment>
      <List>
        <ListContent>Subtotal: {subtotal}</ListContent>
        <ListContent>Tax: {tax}</ListContent>
        <ListContent>Total: {total}</ListContent>
      </List>
    </Segment>
  );
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceTotals)