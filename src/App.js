import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
    </div>
  );
}

export default App;
