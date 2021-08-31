import React from "react";
import { Option } from "./Option";

const Category = ({ title, products }) => {
  return (
    <div class="category">
      <h1>{title}</h1>
      <ul class="options">
        {products.map((product) => (
          <Option
            id={product.id}
            name={product.name}
            description={product.description}
            className={product.className}
            price={product.price}
            img={product.img}
            alt={product.alt} />
        ))}
      </ul>
    </div>
  );
}

export { Category }