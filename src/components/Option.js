import React from "react";

const Option = ({ id, name, description, className, price, img, alt }) => {
  return (
    <li id={id} className={className}>
      <img src={img} className="image" alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div class="price-area">
        <strong>R$ {price}</strong>
        <div className="">
          <button className="minus">-</button>
          <strong>0</strong>
          <button className="plus">+</button>
        </div>
      </div>
    </li >
  );
}

export { Option }