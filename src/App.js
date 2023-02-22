import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [listOrder, setListOrder] = useState('asc');


  // true = already in ascending order or any other order and button text displays 'Change to Descending Order'
  // When button is clicked text changes to ascending order and the list changes to descending order so 
  // false = list is in descending order

  const changeOrderHandler = useCallback(() => {
    setListOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  }, []);
  

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  
  

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} listOrder={listOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
  {listOrder === 'asc' ? 'Change to Descending Order' : 'Change to Ascending Order'}
</Button>

    </div>
  );
}

export default App;
