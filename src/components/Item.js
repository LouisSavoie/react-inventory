const Item = ({ item, onIncrement, onDecrement, onDelete }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td><button onClick={() => onIncrement(item.id)}>+</button></td>
      <td>{item.qty}</td>
      <td><button onClick={() => onDecrement(item.id)}>-</button></td>
      <td><button onClick={() => onDelete(item.id)}>X</button></td>
    </tr>
  );
}

export default Item;
