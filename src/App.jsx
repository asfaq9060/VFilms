import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div id="home" className="page-section">
        <Hero />
      </div>
      <div id="contact" className="page-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
