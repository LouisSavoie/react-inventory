import Item from './Item'

const Items = ({ items, onIncrement, onDecrement, onDelete }) => {
  return (
    <>
      {items.map((item, id) => (
        <Item key={id} item={item} 
          onIncrement={onIncrement} 
          onDecrement={onDecrement} 
          onDelete={onDelete} />
      ))}
    </>
  );
}

export default Items;
