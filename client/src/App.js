import React from "react";
import AppNavBar from "./components/AppNavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
