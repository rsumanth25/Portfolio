import Navbar from './components/Navbar';
import Home from './components/Home/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience";
import LeadershipAndProfessionalDevelopment from "./components/LeadershipAndProfessionalDevelopment";
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contacts/Contact';
import ContactInfo from './components/Contacts/ContactInfo';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Certificates from "./components/Certificates/Certificates";
import Hero from './components/Home/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <Loader />

      <Navbar />
      <Hero />
      <About />

      <Academics />
      <Experience/>
      <LeadershipAndProfessionalDevelopment />
      <Skills />
      
      <Projects />
     <Achievements/>
      <Certificates />

      <>
        <Contact />
       
      </>

      <Footer />
    </div>
  );
}

export default App;