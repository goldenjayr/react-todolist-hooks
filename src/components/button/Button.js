import React from 'react'
import './button.scss'

const Button = ({type, children, className}) => {

    const btnType = className || ''
    const classes = `btn ${btnType}`

    return(
        <button 
        type={type}
        className={classes}
        >
            {children}
        </button>
    )
}


export default Button