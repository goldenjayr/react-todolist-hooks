import React from 'react'
import './button.scss'

const Button = (props) => {
    const {className, children,  ...others} = props

    const btnType = className || ''
    const classes = `btn ${btnType}`

    return(
        <button 
        {...others}
        className={classes}
        >
            {children}
        </button>
    )
}


export default Button