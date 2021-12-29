import './App.css';
import GlobalContext from '../../context/globalContext';
import { useReducer, useEffect } from 'react';
import reducer from '../../reducer/reducer';
import Search from '../Search/Search';
import CustomerContainer from '../CustomerContainer/CustomerContainer';

function App() {

  const initialState = { customers: [], statuses: [] };

  const [state, dispatch] = useReducer(reducer, initialState);  

  useEffect(() => {
    dispatch({ type: 'INIT_STATE'})
  }, []);

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
