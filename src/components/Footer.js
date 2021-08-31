import React from "react";

const Footer = ({ categories }) => {

  const enableButton = checkCategoriesSelected(categories);

  return (
    <footer>
      <button disabled={enableButton ? false : true} className={enableButton ? "finalize-order-button button-on" : "finalize-order-button"}>{enableButton ? "Selecione os 3 itens para fechar o pedido" : "Fechar pedido"}</button>
    </footer>
  );
}

const checkCategoriesSelected = (categories) => {
  const selectedCategories = categories.filter((category) => {
    return category.categoryOptions.find((product) => product.quantity > 0);
  })

  return selectedCategories.length === 3
}

export { Footer }