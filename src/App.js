import { useState } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Bananas Green',
      qty: 12
    },
    {
      id: 2,
      name: 'Navel Oranges 48ct',
      qty: 1
    },
    {
      id: 3,
      name: 'Tomatoes On The Vine',
      qty: 8
    }
  ])

  const addHandler = (item) => {
    console.log(item);
    setItems([...items, item]);
  }

  const incrementHandler = (id) => {
    setItems(items.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item));
  }

  const decrementHandler = (id) => {
    setItems(items.map((item) => item.id === id ? {...item, qty: item.qty - 1} : item));
  }

  const deleteHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Header />
      <AddItem onAdd={addHandler} />
      {
        items.length > 0 ? 
        <Items items={items} 
          onIncrement={incrementHandler} 
          onDecrement={decrementHandler} 
          onDelete={deleteHandler} /> : 
        'Inventory empty'
      }
    </div>
  );
}

export default App;
