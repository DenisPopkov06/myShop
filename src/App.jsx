import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts"
import FullProduct from "./pages/FullProduct";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/footer";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <Header />
      <div  className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products/:id" element={<FullProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
