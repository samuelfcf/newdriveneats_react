import React from "react";

const Footer = () => {
  return (
    <footer>
      <button disabled="true" class="finalize-order-button" onclick="enableConfirmationCard()">Selecione os 3 itens para fechar o pedido</button>
    </footer>
  );
}

export { Footer }