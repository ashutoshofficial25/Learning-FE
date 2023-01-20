import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
