import Item from './Item'

const Items = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item, id) => (<Item key={id} item={item} onDelete={onDelete} />))}
    </>
  );
}

export default Items;
