import React from 'react';
import { Table } from 'semantic-ui-react';
import InvoiceItem from './InvoiceItem';
import NewItem from './NewItem';
import { connect } from 'react-redux';
import InvoiceTotals from './InvoiceTotals';

const InvoiceList= ({items}) => {
    return (
      <Table padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="left" width="7">Item</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width="2">Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width="3">Cost</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width="3">Line Cost</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width="1"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <InvoiceItem key={item.id} item={item}/>
            ))}
          <NewItem />
          <InvoiceTotals items={items}/>
        </Table.Body>
      </Table>    
    );
  
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceList)