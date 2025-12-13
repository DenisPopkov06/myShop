import Header from "./components/header/header";
import Home from "./pages/Home";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
