import About from './components/About';
import Home from './components/Home';
import Navbar from './components/NavBar'
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Experience from './components/Experience'
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import DragNDrop from './components/DragNDrop';

function App() {
  return (
    <div className="App">
      <Home />
      <DragNDrop />
      <Reviews />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
