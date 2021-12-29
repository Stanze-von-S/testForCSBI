import React, { useContext, useRef } from 'react';
import GlobalContext from '../../context/globalContext';
import './Search.css';

function Search(props) {
  
  const { dispatch } = useContext(GlobalContext);
  const searchInput = useRef('');

  const searchCustomers = (event) => {
    event.preventDefault();
    const str =  searchInput.current.value;

    dispatch({ type: 'SEARCH_CUSTOMERS', payload: str });
  }

  return (
    <>
      <h1>Поиск по файлу</h1>
      <form className='search__block'>
        <input ref={searchInput} placeholder='Введите то, что хотите найти' className='search__input' />
        <button type='submit' onClick={searchCustomers} className='search__button'>Поиск</button>
      </form>
      
    </>
  );
}

export default Search;
