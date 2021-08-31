import React, { useState } from "react";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const categories = [
  {
    categoryTitle: "Primeiro, seu prato",
    categoryOptions: [
      {
        id: 1,
        img: "assets/batatafrita.webp",
        alt: "batata frita",
        name: "Batata Frita",
        description: "Batata sequinha e crocante",
        price: "11,90",
        quantity: 0,
        className: "option food"
      },
      {
        id: 2,
        img: "assets/pizza.jpg",
        alt: "pizza",
        name: "Pizza marguerita",
        description: "Molho, queijo, tomate e manjericão",
        price: "45,99",
        quantity: 0,
        className: "option food",
      },
      {
        id: 3,
        img: "assets/saladinha.jpeg",
        alt: "salada",
        name: "Saladinha",
        description: "Folhas verdes, cenoura e pepino",
        price: "19,99",
        quantity: 0,
        className: "option food",
      },
      {
        id: 4,
        img: "assets/frango_yin_yang.svg",
        alt: "frango",
        name: "Frango Yin Yans",
        description: "Um pouco de batata, um pouco de salada",
        price: "25,90",
        quantity: 0,
        className: "option food",
      },
    ]
  },
  {
    categoryTitle: "Segundo, sua bebida",
    categoryOptions: [
      {
        id: 5,
        img: "assets/sucomaracuja.jpeg",
        alt: "suco maracuja",
        name: "Suco de maracujá",
        description: "Da fruta 350ml",
        price: "3,99",
        quantity: 0,
        className: "option drink",
      },
      {
        id: 6,
        img: "assets/agua.jpg",
        alt: "garrafa de agua",
        name: "Águinha Gelada",
        description: "Garrafa 500ml",
        price: "2,00",
        quantity: 0,
        className: "option drink",
      },
      {
        id: 7,
        img: "assets/uva.jpg",
        alt: "suco de uva",
        name: "Suco de uva",
        description: "Da fruta 350ml",
        price: "5,90",
        quantity: 0,
        className: "option drink",
      },
      {
        id: 8,
        img: "assets/coquinha_gelada.svg",
        alt: "lata de coca-cola",
        name: "Coquinha Gelada",
        description: "Lata 350ml",
        price: "4,50",
        quantity: 0,
        className: "option drink",
      },
    ]
  },
  {
    categoryTitle: "Por fim, sua sobremesa",
    categoryOptions: [
      {
        id: 9,
        img: "assets/moussemaracuja.jpg",
        alt: "mousse maracuja",
        name: "Mousse Maracujá",
        description: "Apenas mousse",
        price: "3,90",
        quantity: 0,
        className: "option dessert",
      },
      {
        id: 10,
        img: "assets/brigadeirao.jpg",
        alt: "brigadeirao",
        name: "Brigadeirão",
        description: "Esse é top",
        price: "4,90",
        quantity: 0,
        className: "option dessert",
      },
      {
        id: 11,
        img: "assets/pave.jpg",
        alt: "pave",
        name: "Pavê de chocolate",
        description: "Pacumê",
        price: "5,25",
        quantity: 0,
        className: "option dessert",
      },
      {
        id: 12,
        img: "assets/pudim.svg",
        alt: "pudim",
        name: "Pudim",
        description: "Apenas pudim",
        price: "3,00",
        quantity: 0,
        className: "option dessert",
      }
    ]
  }
]

const App = () => {

  const [itemsSelected, setItemsSelected] = useState(categories);

  const changeItemQuantity = (product, quantity) => {
    console.log(product, quantity);
    product.quantity = quantity;
    setItemsSelected([...itemsSelected])
  }

  return (
    <>
      <div className="container">
        <Header />
        <main>
          {categories.map((categorie, index) => (
            <Category
              key={index}
              title={categorie.categoryTitle}
              products={categorie.categoryOptions}
              changeItemQuantity={changeItemQuantity} />
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}

export { App }