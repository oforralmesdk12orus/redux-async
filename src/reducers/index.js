import { combineReducers } from 'redux'
import postsByReddit from './postsByReddit'
import selectedReddit from './selectedReddit'

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
})

export default rootReducer
