import React from 'react'
import { MapPin, Mail, Phone ,Twitter ,Facebook ,Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
function Footer(){
  return (
    <footer>
        <div className='footer-div'>
          <h3>GET IN TOUCH</h3>
          <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          <address>
          <div className='footer-logo'>
            <span><MapPin /></span>
            <span>123 Street, New York, USA</span>
          </div>
          <div className='footer-logo'>
            <span className='logo'><Mail /></span>
            <span>info@example.com</span>
          </div>
          <div className='footer-logo'>
            <span className='logo'><Phone /></span>
            <span>123456789</span>
          </div>
          </address>
        </div>
        <div className='footer-div'>
          <h3>QUICK SHOP</h3>
          <ul className='footer-list'>
           <li> <Link to={"/"}>Home</Link></li>
            <li>Our Shop</li>
            <li>Shop Detail</li>
            <li>Shopping Cart</li>
            <li>Checkout</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-div'>
          <h3>QUICK SHOP</h3>
          <ul className='footer-list'>
            <li>Home</li>
            <li>Our Shop</li>
            <li>Shop Detail</li>
            <li>Shopping Cart</li>
            <li>Checkout</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-div'>
          <h3>NEWSLETTER</h3>
          <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
          <input type="email" name="" id="footer-input" placeholder='Enter you Email' />
          <button id='footer-btn'>Sing Up</button>
          <div>
            <h3 className='follow'>FOLLOW US</h3>
            <span className='socialMedia-logo'><Twitter fill='#343a40' /></span>
            <span className='socialMedia-logo'><Facebook fill="#343a40" /></span>
            <span className='socialMedia-logo'><Linkedin fill='#343a40' /></span>
          </div>
        </div>
    </footer>
  )
}

export default Footer
