import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../context/globalContext';
import Customer from '../Customer/Customer';
import './CustomerContainer.css';

function CustomerContainer() {

  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: 'INIT_STATE'})
  }, []);


  return (
    <section className='customer-container'>
      {state.customers.length > 0 && state.customers.map((customer) => <Customer customer={customer} key={customer.id} />)}
    </section>   
  );
}

export default CustomerContainer;
