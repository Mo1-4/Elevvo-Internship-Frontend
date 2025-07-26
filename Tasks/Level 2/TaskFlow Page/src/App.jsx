import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  
  return (
    <>
      <Navbar />
      <div className="taskflow-container">
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;
