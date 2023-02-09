import React, { useEffect, useState } from 'react'

import './Nav.css'

const Nav = () => {
  const [show , handleSHow] = useState(false);

  const transitionNavBar =() => {
    if(window.scrollY > 100) {
      handleSHow(true);
    } else{
      handleSHow(false)
    }
  };

  useEffect(() =>{
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_container'>

      <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""  />
      <img className='nav_avatar' src="https://www.w3schools.com/w3images/avatar2.png" alt=""  />

      </div>
    </div>
  )
}

export default Nav