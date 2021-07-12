const Item = ({ item }) => {
  return (
    <div>
      <p>{item.name}: {item.qty}</p>
    </div>
  );
}

export default Item;
