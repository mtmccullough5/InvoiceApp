import React from 'react';
import { Segment, List } from 'semantic-ui-react';
import ListItem from './ListItem';
import NewItem from './NewItem';
import { connect } from 'react-redux';

const InvoiceList= ({items}) => {
    return (
      <Segment>
        <List>
          {items.map((item) => (
            <ListItem key={item.id} item={item}/>
            ))}
          <NewItem />
        </List>       
      </Segment>
    );
  
}

const mapStateToProps = (state) => {
  return (
    { items: state }
  );
}

export default connect(mapStateToProps)(InvoiceList)