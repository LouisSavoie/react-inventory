const Item = ({ item, onDelete }) => {
  return (
    <div>
      <p>{item.name}: {item.qty}</p>
      <button onClick={() => onDelete(item.id)}>X</button>
    </div>
  );
}

export default Item;
