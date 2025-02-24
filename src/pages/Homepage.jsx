import ProfessionalCareProvider from "../components/ProfessionalCareProvider";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Patient_testimonilas from '../components/Patient_testimonilas' 
export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProfessionalCareProvider />
      <Patient_testimonilas/>
      <Footer />
    </div>
  );
}
