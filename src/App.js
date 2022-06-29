import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import RoutePage from "./components/RoutePage";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <RoutePage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
