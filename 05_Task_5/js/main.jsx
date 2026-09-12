import React from "react";
import { createRoot } from "react-dom/client";

function UserDetails({ name, surname, address, postcode, city }) {
  return (
    <div className="card">
      <div>
        <h5>{name} {surname}</h5>
        <div>{address}</div>
        <div>{postcode} {city}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <UserDetails
      name="Sandra"
      surname="Bartelová"
      address="Hlavní 123"
      postcode="500 03"
      city="Hradec Králové"
    />
  );
}

/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

