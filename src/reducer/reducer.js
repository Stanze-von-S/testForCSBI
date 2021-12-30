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
      const searchList = customersList.filter((customer) => (customer.firstName.toLowerCase().includes(action.payload.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(action.payload.toLowerCase()) || customer.patronymic.toLowerCase().includes(action.payload.toLowerCase())))
      return { ...state, customers: [...searchList] };
    }

    default:
      return state;
  }
};

export default reducer;
