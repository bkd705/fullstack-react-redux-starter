import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

function validateSignUp(data) {
  let errors = {}

  if(Validator.isEmpty(data.username)) {
    errors.username = 'This field may not be empty!'
  }
  if(Validator.isEmpty(data.firstName)) {
    errors.firstName = 'This field may not be empty!'
  }
  if(Validator.isEmpty(data.lastName)) {
    errors.lastName = 'This field may not be empty!'
  }
  if(Validator.isEmpty(data.email)) {
    errors.email = 'This field may not be empty!'
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Not a valid e-mail!'
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = 'This field may not be empty!'
  }
  if(Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'This field may not be empty!'
  }
  if(!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match!'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateSignUp
