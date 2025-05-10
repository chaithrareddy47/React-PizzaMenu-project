import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
console.log(pizzaData);

const Header = () => {
    return (
      <div className="header-container">
            <h1>Fast React Pizza Co.</h1>
            <h2>our menu</h2>
      </div>
    );
}

const Menu = () => {
    return (
      <div className="menu">
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <div className="pizza-container">
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </div>
      </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">

        </div>
    )
}


const Pizza = () => {
    return (
      <div className="pizza">
            <img  src="/pizzas/spinaci.jpg" alt="" />
            <div>
            <h3>Pizza Prosciutto</h3>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p> 
        </div>
       
      </div>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Menu/>
           <Footer/>
            
       
      </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
