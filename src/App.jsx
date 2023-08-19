import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import video from "./assets/vid10.mp4";
import Exit from "./components/Exit";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <Hero />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Exit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
