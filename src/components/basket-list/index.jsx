import BasketItem from "../basket-item";
import "./style.css";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price?.regularPrice * el.quantity
  }, 0)

  console.log(order);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
}

export default BasketList;
