import React from 'react'
import './text.scss'

const Text = (props) => {


    return(
        <div className="txt">{props.children}</div>
    )
}

export default Text

