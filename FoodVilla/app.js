import React from "react";
import logo from '/images/FoodCompany.png'
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => (
  <a href="/">
    <img  src={logo} />
  </a>
);

//composing Component

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return <h3>This is Body</h3>;
};

const Footer = () => {
  return <h4>This is footer</h4>;
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
