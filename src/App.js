import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin/index";
import { Home } from "./pages/Home";
import Alibaba from "./pages/Alibaba/index";
import TechStoreList from "./pages/TechStorelist";
import Electronic from "./pages/Electronic";
import ProductDetails from './pages/ProductDetails/index';
import Cart from "./pages/BasicCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/alibaba" element={<Alibaba />} />
        <Route path="/techstorelist" element={<TechStoreList />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cartpage" element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
