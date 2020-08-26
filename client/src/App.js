import React, { useEffect, useState } from "react";
import AppNavBar from "./components/AppNavBar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./services/auth.service";

function App() {
  const [user, setUser] = useState("");
  //Load user if browser has token
  useEffect(() => {
    loadUser().then((user) => {
      if (user) setUser(user.data);
    });
  }, []);

  return (
    <div className="App">
      <AppNavBar user={user} />
      <ToastContainer />
      {user ? <Dashboard user={user} /> : <Carousel />}
      <About />
      <Footer />
    </div>
  );
}

export default App;
