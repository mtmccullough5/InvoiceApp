import React, {Component,Fragment} from 'react';
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';

class InvoiceTotals extends Component {
  state = {}

  render(){
    let taxRate = 0.05
    let subtotal = 0
    if (this.props.items) {
      this.props.items.forEach((item) => {
      subtotal+=Number.parseFloat(item.lineCost) 
    })}
    let taxAmount = subtotal*taxRate
    subtotal = Number.parseFloat(subtotal).toFixed(2)
    const tax = Number.parseFloat(taxAmount).toFixed(2)
    let total = Number.parseFloat(subtotal+taxAmount).toFixed(2)

    return (
      <Fragment>
        <Table.Row></Table.Row>
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
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceTotals)