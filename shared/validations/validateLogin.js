import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

function validateLogin(data) {
  let errors = {}

  if(Validator.isEmpty(data.username)) {
    errors.username = 'This field may not be empty!'
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field may not be empty!'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateLogin
