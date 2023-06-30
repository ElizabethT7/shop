import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../preloader';
import List from '../list';
import Cart from '../cart';
import BasketList from '../basket-list';

function Main() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
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
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId);
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.shop);
        data.shop && setItems(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      { 
        loading ? <Preloader /> : <List items={items} addToBasket={addToBasket}/>
      }
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>
      }
    </main>
  );
}

export default Main;
