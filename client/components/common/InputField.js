import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

const InputField = ({ field, value, label, error, placeholder, type, onChange, disabled, onBlur }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{ label }</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={field}
        value={value}
        className='form-control'
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className='help-block'>{ error }</span> }
    </div>
  )
}

InputField.propTypes = {
  field: T.string.isRequired,
  value: T.string.isRequired,
  label: T.string,
  error: T.string,
  placeholder: T.string,
  type: T.string.isRequired,
  onChange: T.func.isRequired,
  onBlur: T.func,
  disabled: T.bool,
}

InputField.defaultProps = {
  type: 'text',
  disabled: false
}

export default InputField
