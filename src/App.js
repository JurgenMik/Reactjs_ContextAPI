import './App.css';
import Nav from './components/Nav';
import Products from './components/Product';
import Checkout from './components/Checkout';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {CartContext, CartProvider} from './CartContext'

// context - off-site data holder that is imported across the components

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
         </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
