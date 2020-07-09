import React from 'react';
import {FiHeart} from 'react-icons/fi'

import './style.css';

const Footer=()=>{
    return(
        <footer id="footer-page">
            <h4>Desenvolvido a mao & com </h4> 
            <FiHeart size={16} color="#fff"/>
            <h4> 
                por <a href="https://www.linkedin.com/in/gabriel-arao-a78043183/" target="blank">Gabriel Timba</a>
            </h4>
        </footer>
    )
}

export default Footer;