import { useContext } from "react";
import { ShopContext } from "../../context";
import Item from "../item";

function List() {
  const { items = [] } = useContext(ShopContext);

  if (!items.length) {
    return <h3>Ничего не найдено</h3>;
  }

  return (
    <div className="items">
      {items.map((item) => {
        return <Item key={item.mainId} {...item} />;
      })}
    </div>
  );
}

export default List;
