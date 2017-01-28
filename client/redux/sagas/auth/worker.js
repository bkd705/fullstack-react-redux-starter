import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../../actions/auth/authTypes'
import * as api from '../../../utils/api'

export function* asyncLogin(action) {
  try {
    const response = yield call(axios.post, api.login, action.user)
    console.log(response)
    yield put({ type: types.LOGIN_SUCCESS, response: response.data})
  } catch(err) {
    yield put({ type: types.LOGIN_FAILURE, error: err.message })
  }
}

export function* asyncSignup(action) {
  try {
    const reponse = yield call(axios.post, api.signup, action.data)
    yield put({ type: types.SIGNUP_SUCCESS, response: response.data})
  } catch(err) {
    yield put({ type: types.SIGNUP_FAILURE, error: err.message })
  }
}
