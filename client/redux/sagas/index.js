import authSaga from './auth/watcher'

export default function* rootSaga() {
  yield [
    authSaga()
  ]
}
