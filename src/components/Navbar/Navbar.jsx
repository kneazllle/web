import React from 'react';
import './Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from '../../assets/Synovate.png'

export default function Navbar() {
  return (
    <div>
      <div className='navbar py-4 px-5 row'>
        <div className="col-2 d-flex justify-content-center"><img src={logo} className='logo-img' /></div>
        <div className="col-8 mx-auto">
          <ul className="nav-list">
            <a href="/" className='list-item-link'>
              <li className="list-item">Home</li>
            </a><a href="" className='list-item-link'>
              <li className="list-item">Services</li>
            </a><a href="" className='list-item-link'>
              <li className="list-item">Projects</li>
            </a><a href="" className='list-item-link'>
              <li className="list-item">About Us</li>
            </a>
          </ul>
        </div>
        <div className="col-2 contact-btn">
          <a href="/contact" className='btn-contact px-3 py-2'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}