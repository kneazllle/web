import React from 'react';
import './Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from '../../assets/Synovate.png'

export default function Navbar() {
  return (
    <div>
      <div className='navbar py-4 px-5 row'>
        <div className="col-lg-2 col-sm-4 img-sec"><img src={logo} className='logo-img' /></div>
        <div className="col-lg-8 d-none mx-auto nav-sec">
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
        <div className="col-lg-2 col-sm-3 contact-btn">
          <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className='hamburger'
>
  <rect y="4" width="24" height="2" fill="currentColor" />
  <rect y="11" width="24" height="2" fill="currentColor" />
  <rect y="18" width="24" height="2" fill="currentColor" />
</svg>
          <a href="/contact" className='btn-contact px-3 py-2'>Contact Us</a>
          

        </div>
      </div>
    </div>
  );
}