import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-logo">
      <img src={footer_logo} alt="" />
      <p>LuxeMart</p>
     </div>
     <ul className="footer-links">
      <li>Company</li>
      <li>Products</li>
      <li>Offices</li>
      <li>About</li>
      <a style={{listStyle:'none',textDecoration:'none',color: '#1a1a1a'}} href="https://wa.me/917989795331" target="_blank" rel="noopener noreferrer"><li style={{listStyle:'none'}}>Contact</li></a>
     
     </ul>
     <div className="footer-social-icon">
      <div className="footer-icons-container">
      <a href="https://www.instagram.com/reddy_gopal_krishna8" target="_blank" rel="noopener noreferrer">
    <img src={instagram_icon} alt="Instagram" />
  </a>
      </div>
      <div className="footer-icons-container">
      <img src={pintester_icon} alt="" />
      </div>
      <div className="footer-icons-container">
      <a href="https://wa.me/917989795331" target="_blank" rel="noopener noreferrer">
    <img src={whatsapp_icon} alt="WhatsApp" /></a>
      </div>
     </div>
     <div className="footer-copyright">
      <hr />
      <p>Copyright @ 2025 - All Rights Reserved</p>
      <p >Developed by <b>@Reddy Gopal Krishna</b> <a href=""></a></p>
     </div>
      
    </div>
  )
}

export default Footer;
