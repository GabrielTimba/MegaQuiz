import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import './style.css'

const Home=()=>{
    return (
        <div id="page-home">
            <div>
                <img src={logo} alt="logo"/>
                <h2>Vamos nos  divertir  aprendendo novas coisas</h2>
            </div>
            <Link to='/quiz'>
                <Button text="Vamos"/>
            </Link>
           
        </div>
    )
}

export default Home;