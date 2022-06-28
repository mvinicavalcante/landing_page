import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DefaultTemplate from './templates/DefaultTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <DefaultTemplate>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/experiences' element={<Experiences />}/>
            <Route path='/about-me' element={<AboutMe />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router> 
      </DefaultTemplate>
    </>
  );
}

export default App;
