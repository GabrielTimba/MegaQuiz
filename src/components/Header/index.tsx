import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import './style.css';

const Header=()=>{
    return(
        <header id="header-container">
            <nav>
                <Link to="/" id="link">
                    <FiArrowLeft color="#fff" size={16}/>
                    Voltar
                </Link>
                <img src={logo} alt="logo"/>
            </nav>
        </header>
    )
}

export default Header;