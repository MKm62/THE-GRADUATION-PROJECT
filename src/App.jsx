import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";
import ProfessionalCareProvider from "./components/ProfessionalCareProvider";
import Provider from "./context/Provider";
import Homepage from "./pages/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import Signup1 from "./pages/Signup1";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<ProfessionalCareProvider />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/signup1" element={<Signup1 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
