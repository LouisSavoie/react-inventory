import Item from './Item'

const Items = ({ items, onIncrement, onDecrement, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>In</th>
          <th>Qty</th>
          <th>Out</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, id) => (
          <Item key={id} item={item} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} 
            onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default Items;
