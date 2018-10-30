import React, { Component } from 'react';

import ListItem from './ListItem'
import NewItem from './NewItem'

class InvoiceList extends Component {
  render() {
    return (
      <div>
        <ListItem />
        <NewItem />
      </div>
    );
  }
}

export default InvoiceList