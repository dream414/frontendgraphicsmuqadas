import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
 
 
// Pages (create these files)
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

// Projects (12 pages)
import Branding from "./projects/Branding";
import Logo from "./projects/Logo";
import Packaging from "./projects/Packaging";
import Social from "./projects/Social";
import Poster from "./projects/Poster";
import Flyer from "./projects/Flyer";
import Print from "./projects/Print";
import Advertising from "./projects/Advertising";
import Illustration from "./projects/Illustration";
import Typography from "./projects/Typography";
import Photo from "./projects/Photo";
import Infographics from "./projects/Infographics";
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes> 
        {/* {/* Main Pages  */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />

        {/* 12 Project Routes */}
        <Route path="/projects/branding" element={<Branding />} />
        <Route path="/projects/logo" element={<Logo />} />
        <Route path="/projects/packaging" element={<Packaging />} />
        <Route path="/projects/social" element={<Social />} />
        <Route path="/projects/poster" element={<Poster />} />
        <Route path="/projects/flyer" element={<Flyer />} />
        <Route path="/projects/print" element={<Print />} />
        <Route path="/projects/advertising" element={<Advertising />} />
        <Route path="/projects/illustration" element={<Illustration />} />
        <Route path="/projects/typography" element={<Typography />} />
        <Route path="/projects/photo" element={<Photo />} />
        <Route path="/projects/infographics" element={<Infographics />} />
      </Routes>

       {/* Footer */}
       <Footer/>
    </>
  );
}

export default App;


