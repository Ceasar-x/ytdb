// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Classes from "./pages/classes/Classes";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true); // State to control spinner visibility

  // Simulate a loading process (e.g., fetching data or page load delay)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Spinner hides after 2 seconds
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <BrowserRouter >
      {loading && <Spinner />} {/* Show Spinner only when loading is true */}
      {!loading && <Navbar />} {/* Navbar visible after loading is complete */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      {!loading && <Footer />}
    </BrowserRouter>
  );
};


export default App
