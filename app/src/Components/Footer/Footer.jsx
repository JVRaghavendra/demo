import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='PersonalData'>
            <h3>PersonalData</h3>
        <ul>
            <li>Name</li>
            <li>address</li>
            <li>contact</li>
            <li>mailid</li>
        </ul>
        </div>
        <div className='PersonalData'>
        <h3>Links</h3>
        <ul>
            <li> <a href='https://www.facebook.com/'>Facebook</a></li>
            <li> <a href='https://www.google.co.in/'>Google</a></li>
            <li> <a href='https://twitter.com/i/flow/login'>Twitter</a></li>
        </ul>
        </div>
        <div className='PersonalData'>
            <h3>SocialMedia</h3>
        <ul>
            <li> <a href ='https://epaper.sakshi.com'>Sakshi</a></li>
            <li> <a href ='https://www.eenadu.net/'>Eenadu</a></li>
            <li> <a href ='https://timesofindia.indiatimes.com/'>Times Of India</a></li>
            <li> <a href ='https://indianexpress.com/'>TheIndianExpress</a></li>
        </ul>
        </div>  

    </div>
  )
}

export default Footer