import React from 'react'

import './text-field.scss'

const TextField = (props) => {
    return (
        <div className="field">{props.children}</div>
    )
}

export default TextField