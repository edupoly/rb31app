import React from "react";
import Cart from "./Cart";
import axios from 'axios'
import Products from "./Products";
function App() {
  
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly</h1>
      <Products></Products>
      {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
