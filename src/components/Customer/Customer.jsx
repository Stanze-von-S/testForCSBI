/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import GlobalContext from '../../context/globalContext';
import './Customer.css';

function Customer({ customer }) {

  const { dispatch, state } = useContext(GlobalContext);
  let styleCustomer = '';
  if (customer.status === 1) {
    styleCustomer = 'customer__button customer__button_status_await';
  } else {
    styleCustomer = 'customer__button customer__button_status_work';
  }
  const changeStatus = () => {
    if (customer.status === 1) {
      dispatch({ type: 'CHANGE_STATUS', payload: customer.id });
    }
  }

  return (
    <div className='customer'>
      <h2 className='customer__header'>{customer.lastName} {customer.firstName} {customer.patronymic}</h2>
      <button className={styleCustomer} onClick={changeStatus}>
        {state.statuses[customer.status - 1].statusText}
        </button>
    </div>
  );
}

export default Customer;
