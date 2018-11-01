import React, {Fragment} from 'react';
import { Table } from 'semantic-ui-react'
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
    <Fragment>
      <Table.Row><br /></Table.Row>
      <Table.Row textAlign="right">
        <Table.Cell width="7"></Table.Cell>
        <Table.Cell width="2"></Table.Cell>
        <Table.Cell width="3">
          Subtotal: <br /> 
          Tax:      <br />
          Total:    <br />
        </Table.Cell>
        <Table.Cell width="3">
          {subtotal} <br />
          {tax}      <br />
          {total}    <br />
        </Table.Cell>
        <Table.Cell width="1"><br /></Table.Cell>
      </Table.Row>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceTotals)