
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Portofolio from '../src/pages/Portofolio';
import About from '../src/pages/About';
import Skills from '../src/pages/Skills';
import Contact from '../src/pages/Contact';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';





function App() {
  return (
    <div >
      <Router>
   <Navbar/>
   

    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/portofolio" element={<Portofolio />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/skills" element={<Skills />}/>
   
    <Route path="/contact" element={<Contact />}/>
    
    </Routes>
    <SocialMedia/>
    </Router>
        
    </div>
  );
}

export default App;
