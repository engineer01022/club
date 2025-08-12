import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav" style={{
      width:'100%',
      padding: '0.5rem',
      borderBottom: '1px solid #dee2e6',
      margin: '0rem',
     
    }}>
      <div className='navbar-container'>
        {/* Logo */}
        <div style={{fontSize:'24px',fontWeight: 'bold'}}>
          <img src='mozon.png'  style={{height:'50px', borderRadius:'6px' ,margin:'0px'}}/>
        </div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }} className="desktop-menu">
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            الرئيسية
          </Link>
          <Link to="/shop" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            الاشتراكات
          </Link>
          <Link to="/contact" style={{ 
            textDecoration: 'none', 
            color: '#eee', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            اتصل بنا
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#eee'
          }}
          className="mobile-menu-btn"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }} className="mobile-menu">
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            الرئيسية
          </Link>
          <Link 
            to="/shop" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            الاشتراكات
          </Link>
          <Link 
            to="/contact" 
            style={{ 
              textDecoration: 'none', 
              color: '#007bff', 
              fontWeight: 'bold',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            اتصل بنا
          </Link>
        </div>
      )}

      {/* CSS للـ Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const tags = ['الرئيسية', 'المتجر', 'الاشتراكات والباقات', 'تواصل بنا'];
const routes = ['/', '/shop', '/subscriptions', '/Contact']; // Fixed route paths

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbaro" : "navbar"}>
      <div className="logo">
        <img src="mozon.png" alt="image" />
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {tags.map((tag, index) => (
          <Link 
            to={routes[index]} 
            key={index} 
            onClick={() => setMenuOpen(false)} 
            className="nav-link"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd' 
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold'
          }}>
            الرئيسية
          </Link>
        </li>
        <li>
          <Link to="/shop" style={{ 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold'
          }}>
            المتجر
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold'
          }}>
            اتصل بنا
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/