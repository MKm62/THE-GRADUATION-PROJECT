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
import SignupPage1 from "./pages/SignupPage1";
import SignupPage2 from "./pages/SignupPage2";
import SignupPage3 from "./pages/SignupPage3";

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
          <Route path="/signup1" element={<SignupPage1 />} />
          <Route path="/signup2" element={<SignupPage2 />} />
          <Route path="/signup3" element={<SignupPage3 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
