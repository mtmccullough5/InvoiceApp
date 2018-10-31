import React from 'react';
import { Segment, Table } from 'semantic-ui-react';
import InvoiceItem from './InvoiceItem';
import NewItem from './NewItem';
import { connect } from 'react-redux';

const InvoiceList= ({items}) => {
    return (
      <Segment textAlign="center">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Cost</Table.HeaderCell>
              <Table.HeaderCell>Line Cost</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <InvoiceItem key={item.id} item={item}/>
              ))}
            <NewItem />
          </Table.Body>
        </Table>    
      </Segment>
    );
  
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceList)