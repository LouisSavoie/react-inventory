import Item from './Item'

const Items = ({ items }) => {
  return (
    <>
      {items.map((item, id) => (<Item key={id} item={item} />))}
    </>
  );
}

export default Items;
