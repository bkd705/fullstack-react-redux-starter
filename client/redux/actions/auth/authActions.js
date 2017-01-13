import * as types from './authTypes'

export const login = (user) => {
  return {
    type: types.AUTH_LOGIN,
    user
  }
}

export const signup = (data) => {
  return {
    type: types.AUTH_SIGNUP,
    data
  }
}

export const logout = () => {
  return {
    type: types.AUTH_LOGOUT
  }
}

export const setToken = () => {
  return {
    type: types.AUTH_TOKEN
  }
}
