import { actionTypes } from '../actions/product-action'

export default function reducer (state = {}, action) {
  // console.log(action)
  switch (action.type) {
    case actionTypes.FETCH:
      return {
        ...state
      }
    case actionTypes.FETCH_SUCCESS:
      ('reducer work')
      // console.log(action)
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}