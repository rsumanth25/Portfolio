import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Certificates from './components/Certificates';


function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <About />
      <Academics />
      <Skills />
      <Projects />
      <Certificates /> 
      <Contact />
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default App;
