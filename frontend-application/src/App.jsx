import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/edit-product' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
