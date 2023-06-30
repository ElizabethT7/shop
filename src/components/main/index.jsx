import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../../config';
import { ShopContext } from '../../context';
import Preloader from '../preloader';
import List from '../list';
import Cart from '../cart';
import BasketList from '../basket-list';
import Alert from '../alert';

function Main() {
  const { 
    loading,
    order,
    isBasketShow,
    alertName,
    setItems
  } = useContext(ShopContext);

  /*const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
    setAlertName(item.name);
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };*/

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.shop);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <List />}
      {isBasketShow && (
        <BasketList />
      )}
      {alertName && <Alert />}
    </main>
  );
}

export default Main;
