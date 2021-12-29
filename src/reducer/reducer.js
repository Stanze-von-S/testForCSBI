import list from '../files/list.json';
import status from '../files/status.json';
import tfOTA from '../utils/functions';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_STATE': {
      const listCustomers = tfOTA(list.list);
      const listStatuses = [...status.status];
      return { customers: listCustomers, statuses: listStatuses };
    }
    case 'CHANGE_STATUS': {
      const customersList = [...state.customers];
      customersList.forEach((customer) => {
        if (customer.id === action.payload) {
          customer.status = 2;
        }
      });
      return { ...state, customers: [...customersList] };
    }
     
    case 'SEARCH_CUSTOMERS': {
      const customersList = [...state.customers];
      const searchList = customersList.filter((customer) => (customer.firstName.includes(action.payload) ||
        customer.lastName.includes(action.payload) || customer.patronymic.includes(action.payload)))
      return { ...state, customers: [...searchList] };
    }

    default:
      return state;
  }
};

export default reducer;
