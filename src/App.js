import Header from "./components/header/header";
import Home from "./pages/Home";
import Footer from "./components/footer/footer";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        {/* <Contacts /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
