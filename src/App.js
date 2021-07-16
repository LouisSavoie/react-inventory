import { useState, useEffect } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }

    getItems();
  }, [])

  // Fetch Items
  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    return data;
  }

  // Fetch Item
  const fetchItem = async (id) => {
    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();

    return data;
  }

  const addHandler = async (item) => {
    const res = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    const data = await res.json()

    setItems([...items, data]);
  }

  const incrementHandler = async (id) => {
    const itemToIncrement = await fetchItem(id);
    const updatedItem = { ...itemToIncrement, qty: itemToIncrement.qty + 1 }

    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    });

    const data = await res.json();


    setItems(items.map((item) => item.id === id ? {...item, qty: data.qty} : item));
  }

  const decrementHandler = async (id) => {
    const itemToDecrement = await fetchItem(id);
    const updatedItem = { ...itemToDecrement, qty: itemToDecrement.qty - 1 }

    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    });

    const data = await res.json();


    setItems(items.map((item) => item.id === id ? {...item, qty: data.qty} : item));
  }

  const deleteHandler = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE'
    });

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
