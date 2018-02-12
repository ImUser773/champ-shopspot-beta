import { call } from 'redux-saga/effects'
import indexSaga from './product-saga'

export default [
  call(indexSaga)
]