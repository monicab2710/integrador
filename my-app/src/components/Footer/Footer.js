import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icon/bs'
import{FaLinkedinIn} from 'react-icon/fa'
import '/Styles/FooterStyled';

n
function Footer () {
  return (
    <FooterStyled>
    <footer>
    <div className="container">
        <div className= "copyrights">
         <img src=""></img>
        <p> ©2022 Digital Booking </p>   
        </div>
        
        <div className = "icons-socialM">
            <BsInstagram/>
            <BsFacebook/>
            <BsTwitter/>
            <FaLinkedinIn/>
        </div>
         </div>
        </footer>
        </FooterStyled>
  )
}

export default Footer;


