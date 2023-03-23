import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket";
import Header from "./Components/Header/Header";
import { CartProvider } from "react-use-cart";

function App() {
  // products state variable
  // useffect that runs the below function
  // function to get products

  const [armour, setArmour] = useState([]);

  useEffect(() => {
    getArmour();
  }, []);

  async function getArmour() {
    let API = "http://localhost:8080/products";

    const res = await axios.get(API);
    setArmour(res.data);

    // const newArmourList = [...armour, res.data];
    // setArmour(newArmourList);
    console.log(res.data);
  }

  return (
    <div className="App">
      <Header />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={armour} setArmour={setArmour} />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
