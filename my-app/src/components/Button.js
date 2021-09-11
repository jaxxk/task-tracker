import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text, onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor:color}} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProp = {
    color:'steel-blue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
