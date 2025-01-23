import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    label = 'Button',
    type = 'button',
    className = '',
    disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

// PropTypes validation
Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

// Default props (in case they are not passed in)
Button.defaultProps = {
  label: 'Button',
  type: 'button',
  className: '',
  disabled: false,
}

export default Button
