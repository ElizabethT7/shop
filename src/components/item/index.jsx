function Item(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: price,
    displayAssets: image,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={image[0]?.full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({ id, name, price})}>
          Купить
        </button>
        <span className="right" style={{fontSize: '1.6rem'}}>
          {price?.finalPrice} руб.
        </span>
      </div>
    </div>
  );
}

export default Item;
