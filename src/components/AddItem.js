import { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!name) {
      alert('Please, specify item name.')
      return
    }

    onAdd({ id: Math.floor(Math.random() * 10000), name, qty }); // CHANGE HOW ID WORKS AFTER DB IMPLEMENTATION

    setName('');
    setQty(0);
  }

  return (
    <form onSubmit={onSubmit}>

      <div>
        <label>Item</label>
        <input type='text' 
        placeholder='Item Name' 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Quantity</label>
        <input type='number' 
        placeholder='Quantity' 
        value={qty} 
        onChange={(e) => setQty(e.target.type === 'number' ? parseInt(e.target.value) : e.target.value)} />
      </div>

      <input type="submit" value='Add Item' />

    </form>
  )
}

export default AddItem
