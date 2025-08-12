import React from 'react';
import './App.css'
import { FaShoppingCart , FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cad = ({ title, discuss, img }) => {
  return (
    <Link to="/Shop" style={{textDecoration:'none'}}>
    <div className="card" id='card'>
      <div style={{padding:'1rem'}}>
        <h1>{title}</h1>
        <p>{discuss} </p>
      </div>
    <div>
      <img src={img} />
    </div>
    </div> </Link>
  );
};

export default Cad;