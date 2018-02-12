import { all } from 'redux-saga/effects'
import indexSaga from './modules/index/sagas'

const sagas = [
  all(indexSaga)
]

export default function* mainSaga() {
  yield all(sagas)
}