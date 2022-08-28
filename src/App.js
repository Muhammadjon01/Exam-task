import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import ProductsImg from "./Components/ProductsImg/ProductsImg";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <ProductsImg />
      <Shop />
    </div>
  );
}

export default App;
