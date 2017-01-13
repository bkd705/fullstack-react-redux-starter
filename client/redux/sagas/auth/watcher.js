import { takeLatest } from 'redux-saga/effects'
import * as types from '../../actions/auth/authTypes'
import { asyncLogin, asyncSignup } from './worker'

export function* watchLogin() {
  console.log('watchLogin saga running')
  yield takeLatest(types.AUTH_LOGIN, asyncLogin)
}

export function* watchSignup() {
  console.log('watchSignup saga running')
  yield takeLatest(types.AUTH_SIGNUP, asyncSignup)
}

export default function* rootWatcher() {
  yield [
    watchLogin(),
    watchSignup()
  ]
}
