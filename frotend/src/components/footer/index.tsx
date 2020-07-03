import React from 'react';
import {FiHeart} from 'react-icons/fi'

import './style.css';

const Footer=()=>{
    return(
        <footer>
            <h4>Desenvolvido a mao & com </h4> 
            <FiHeart size={16} color="#fff"/>
            <h4> por Gabriel Timba</h4>
        </footer>
    )
}

export default Footer;