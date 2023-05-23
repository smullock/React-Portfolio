import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";



function App() {
  const [selectedSection, setSelectedSection] = useState('About Me');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} />
      {selectedSection === 'About Me' && <AboutMe />}
      {selectedSection === 'Projects' && <Projects />}
      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
