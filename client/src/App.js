import React from "react";
import AppNavBar from "./components/AppNavBar";
// import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <ToastContainer />
      <Dashboard />
      {/* <Carousel /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
