import React from 'react'
import './Header.css'
import {Link,animateScroll as scroll} from 'react-scroll'

function Header() {
  const scrollToContact = () => {
    scroll.scrollToBottom({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div>
        <div className='logo'>
        <p id='elite'>Elite </p> <h2 id='trips'>Trips</h2>
        <div className='linkss'>
        <ul>
            <li><Link to="unleash" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="popular" smooth={true} duration={500}>Search</Link></li>
            <li><Link to="guide" smooth={true} duration={500}>Guide</Link></li>
            <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
        </ul>
        <button className='contact' onClick={scrollToContact}>Contact us</button>
        </div>
        
        </div>
        
    </div>
  )
}

export default Header