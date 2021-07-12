import { useState } from 'react';
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

  return (
    <div>
      <Header />
      {items.length > 0 ? <Items items={items} /> : 'Inventory empty'}
    </div>
  );
}

export default App;
