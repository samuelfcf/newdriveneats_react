import React from "react";
import { Option } from "./Option";

const Category = ({ title, products, changeItemQuantity }) => {

  return (
    <div className="category">
      <h1>{title}</h1>
      <ul className="options">
        {products.map((product, index) => (
          <Option
            key={index}
            changeItemQuantity={changeItemQuantity}
            product={product} />
        ))}
      </ul>
    </div>
  );
}

export { Category }