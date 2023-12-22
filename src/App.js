import About from './components/About';
import Home from './components/Home';
import Navbar from './components/NavBar'
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Experience from './components/Experience'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
