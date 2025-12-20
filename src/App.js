import Header from "./components/header/header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts"
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
