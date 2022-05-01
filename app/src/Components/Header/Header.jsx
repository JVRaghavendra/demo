import React from 'react'
import './Header.css'

 function Header() {
  return (
    <div className='header'>
        <ul className='list'>
            <li>Home</li>
            <li> <a href="/Contact">Contact</a></li>
            <li> <a href="/Services">Services</a></li>
            <li> <a href="/Login">Login</a></li>
            <li> <a href="/Properties">Properties</a></li>
        </ul>
    </div>
  )
}

export default Header


