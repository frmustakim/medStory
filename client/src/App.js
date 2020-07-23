import React from "react";
import AppNavBar from "./components/AppNavBar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
}

export default App;
