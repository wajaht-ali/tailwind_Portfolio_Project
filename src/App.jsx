import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import './styles/App.css';
import 'animate.css';
function App() {

  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      {/* <Experience />
      <Certifications /> */}
      <Footer />
    </div>
  )
}

export default App