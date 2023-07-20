import './App.css';
import Contact from './components/Contact/Contact';
import Fleet from './components/Fleet/Fleet';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavService from './components/NavService/NavService';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Story from './components/Story/Story';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <NavService/>
      <Story/>
      <Fleet/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
