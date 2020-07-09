import React from 'react';

import './style.css';

interface ButtonProps{
    text:string,
    click?:()=>void,
}

const Button:React.FC<ButtonProps>=(props)=>{
    return (
        <button className="button" type="button" onClick={props.click}>
            {props.text}
        </button>
    )
}

export default Button;