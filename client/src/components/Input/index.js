import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    inputClassName = '',
    isRequired = true,
    placeholder = '',
    value = '',
    onChange = () => {},
}) => {
  return (
    <div className={`${className}`}>
        <label htmlFor={name} className="block text-sm font-medium text-gray-800">{label}</label>
        <input
            type={type}
            id={name}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
            placeholder={placeholder}
            required={isRequired}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

// PropTypes validation
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

// Default props (in case they are not passed in)
Input.defaultProps = {
  label: '',
  name: '',
  type: 'text',
  className: '',
  inputClassName: '',
  isRequired: true,
  placeholder: '',
  value: '',
  onChange: () => {},
}

export default Input
