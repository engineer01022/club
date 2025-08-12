import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import Politic from './pages/Politic';
import Charge from './pages/Charge';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='app'>
    <Router >
      <div >
        <Navbar />
        <div style={{ padding: '2rem' }}>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politic" element={<Politic />} />
            <Route path="/charge" element={<Charge />} />

          </Routes>
        </div>
        <Whatsapp />
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;