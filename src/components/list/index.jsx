import Item from "../item";

function List(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  //console.log(items);

  if (!items.length) {
    return <h3>Ничего не найдено</h3>;
  }

  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.mainId} {...item} addToBasket={addToBasket}/>;
      })}
    </div>
  );
}

export default List;
