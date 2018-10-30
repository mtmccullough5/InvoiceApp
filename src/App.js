import React, { Component, Fragment } from 'react';
import './App.css';
import InvoiceList from './Components/InvoiceList';
import InvoiceTotals from './Components/InvoiceTotals';
import { Segment, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Segment color="green">
          <Header as="h1">Import Invoice Challenge</Header>
        </Segment>
        <InvoiceList />
        <InvoiceTotals />
      </Fragment>
    );
  }
}

export default App;
