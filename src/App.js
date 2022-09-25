import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PlaceOrder from "./PlaceOrder";
import OrderSuccess from "./OrderSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/place-order" element={<PlaceOrder />} />
        <Route exact path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
