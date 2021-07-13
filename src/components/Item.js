const Item = ({ item, onIncrement, onDelete }) => {
  return (
    <div>
      <p>{item.name}: {item.qty}</p>
      <button onClick={() => onIncrement(item.id)}>+</button>
      <button onClick={() => onDelete(item.id)}>X</button>
    </div>
  );
}

export default Item;
