import { combineReducers } from 'redux'
import indexReducer from './modules/index/reducers'

export default combineReducers({
  index: indexReducer
})