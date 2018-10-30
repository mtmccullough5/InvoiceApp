import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InvoiceList from './Components/InvoiceList';
import InvoiceTotals from './Components/InvoiceTotals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvoiceList />
        <InvoiceTotals />
      </div>
    );
  }
}

export default App;
