export const actionTypes = {
  FETCH: 'fetch',
  FETCH_SUCCESS: 'fetch_success',
  FETCH_FAILURE: 'fetch_failure'
}

export function fetch() {
  ////console.log('action work')
  return {
    type: actionTypes.FETCH
  }
}

export function fetchSuccess(data) {
  console.log('action success work')
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: { ...data }
  }
}

export function fetchFailure() {
  console.log('action failure work')
  return {
    type: actionTypes.FETCH_FAILURE
  }
}