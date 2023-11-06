import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
