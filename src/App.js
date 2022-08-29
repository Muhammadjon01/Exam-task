import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import ProductsImg from "./Components/ProductsImg/ProductsImg";
import Shop from "./Components/Shop/Shop";
import Stories from "./Components/Stories/Stories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <ProductsImg />
      <Shop />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
