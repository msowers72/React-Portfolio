import React, { useState } from "react";

import "./App.css";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
// import Home from "./pages/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Portfolio from "./componets/Portfolio";
import Resume from "./componets/Resume";
import Footer from "./componets/Footer";

function App() {
  const [ currentPage, setCurrentPage ] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home></Home>;
    }
    if (currentPage === "About") {
      return <About></About>;
    }
    if (currentPage === "Resume") {
      return <Resume></Resume>;
    }
    if (currentPage === "Contact") {
      return <Contact></Contact>;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio></Portfolio>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div className="App d-flex flex-column justify-content-between">
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navbar>

      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
