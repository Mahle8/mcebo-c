import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    // <div>Header</div>
    <header>
    {/* <h1>MCEBOcreations</h1> */}
    <nav>
    <img src="./diamond2.jpg" height="60px" width="auto" alt=''/>
      <ul>
      <li><a href="#hero-section">Home</a></li>
        <li><a href="#products-section">Products</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#contact-content">Contact</a></li>
      </ul>
      </nav>
      <div class="contacts">
      <ul class="contacts-list">
        <li>Call Us :<a href="tel:076606000">076767676</a></li>
        <li>Email Us :<a href="mailto:info@mcebocreations.co.za">info@mcebocreations.co.za</a></li>
      </ul>
    </div>
    
  </header>
  )
}

export default Header