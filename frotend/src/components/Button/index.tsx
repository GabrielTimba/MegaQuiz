import React from 'react';

import './style.css';

interface ButtonProps{
    text:string,
}

const Button:React.FC<ButtonProps>=(props)=>{
    return (
        <button  type="button">
            {props.text}
        </button>
    )
}

export default Button;