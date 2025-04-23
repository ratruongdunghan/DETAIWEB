import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };
  const addToCart = (product) => {
    setCart([...cart, product]);
  }


  // const removeFromCart = (product) => {
  //   setCart(cart.filter((item) => item !== product));
  // };


  return (
    <Router>
      <nav>
        <Link to="/">Trang sản phẩm</Link> | <Link to="/Cart">Giỏ hàng ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
