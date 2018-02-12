import { actionTypes, fetchSuccess, fetchFailure } from '../actions/product-action'
import { takeEvery, all, put } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
es6promise.polyfill()

export function* loadData() {
 // console.log('saga work')
  try {
    const res = yield fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/20/1')
    const data = yield res.json()
    yield put(fetchSuccess(data))
  } catch (err) {console.log(err)
    yield put(fetchFailure(err))
  }
}

export default function* loadDataSaga() {
  yield all([
    takeEvery(actionTypes.FETCH, loadData)
  ])
}