import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../preloader';
import List from '../list';

function Main() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
      { 
        loading ? <Preloader /> : <List items={items} />
      }
    </main>
  );
}

export default Main;
