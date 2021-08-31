import React, { useState } from "react";

const Option = ({ product, changeItemQuantity }) => {

  const { id, name, description, className, price, img, alt, quantity } = product;

  const [selected, setSelected] = useState(className);

  const selectThisItem = () => {

    if (selected === className) {
      setSelected(`${className} selected`);
      changeItemQuantity(product, quantity + 1);
    } else {
      setSelected(className)
      changeItemQuantity(product, 0);
    }
  }

  const decrementThisItem = (event) => {
    event.stopPropagation();

    if (quantity < 1) {
      setSelected(className);
      changeItemQuantity(product, 0);
    } else {
      changeItemQuantity(product, quantity - 1);
    }
  }

  const incrementThisItem = (event) => {
    event.stopPropagation();
    changeItemQuantity(product, quantity + 1);
  }

  return (
    <li id={id} className={selected} onClick={selectThisItem}>
      <img src={img} className="image" alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="price-area">
        <strong>R$ {price}</strong>
        <div className={selected.includes("selected") ? "" : "hidden"}>
          <button className="minus" onClick={(event) => decrementThisItem(event)}>-</button>
          <strong>{quantity}</strong>
          <button className="plus" onClick={(event) => incrementThisItem(event)}>+</button>
        </div>
      </div>
    </li >
  );
}

export { Option }