import React, { Component, Fragment } from 'react';
import './App.css';
import InvoiceList from './Components/InvoiceList';
import { Segment, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Segment color="green">
          <Header as="h1">Import Invoice</Header>
          <InvoiceList />
        </Segment> 
      </Fragment>
    );
  }
}

export default App;
