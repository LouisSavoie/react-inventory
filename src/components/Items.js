import Item from './Item'

const Items = ({ items, onIncrement, onDelete }) => {
  return (
    <>
      {items.map((item, id) => (
        <Item key={id} item={item} onIncrement={onIncrement} onDelete={onDelete} />
      ))}
    </>
  );
}

export default Items;
