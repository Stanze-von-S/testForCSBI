/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import GlobalContext from '../../context/globalContext';
import { useReducer } from 'react';
import reducer from '../../reducer/reducer';
import Search from '../Search/Search';
import CustomerContainer from '../CustomerContainer/CustomerContainer';

function App() {

  const initialState = { customers: [], statuses: [] };

  const [state, dispatch] = useReducer(reducer, initialState);  

  
  return (        
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Search />
        <CustomerContainer /> 
      </GlobalContext.Provider>  
    </div>    
  );
}

export default App;
