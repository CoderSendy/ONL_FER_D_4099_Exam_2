import React from "react";
import { createRoot } from "react-dom/client";


function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <span>React Rules!</span>
        </>
    );
}



/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);