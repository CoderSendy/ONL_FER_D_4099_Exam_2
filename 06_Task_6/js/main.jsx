import React from "react";
import { createRoot } from "react-dom/client";
import products from "./data/products.js";

function Item({ name, price }) {
  return (
    <li>
      {name}, Price: {price}
    </li>
  );
}

function Products({ products }) {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ul>
    </>
  );
}

function App() {
  return <Products products={products} />;
}
/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);


