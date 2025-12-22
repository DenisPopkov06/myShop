import Header from "./components/header/header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts"
import FullProduct from "./pages/FullProduct";;
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products/:id" element={<FullProduct />} />
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
