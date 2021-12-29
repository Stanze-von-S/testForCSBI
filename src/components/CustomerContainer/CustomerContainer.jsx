import React, { useContext } from 'react';
import GlobalContext from '../../context/globalContext';
import Customer from '../Customer/Customer';
import './CustomerContainer.css';

function CustomerContainer(props) {

  const { state } = useContext(GlobalContext);

  return (
    <section className='customer-container'>
      {state.customers.map((customer) => <Customer customer={customer} key={customer.id} />)}
    </section>   
  );
}

export default CustomerContainer;
