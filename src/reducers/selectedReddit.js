import {
  SELECT_REDDIT,
} from '../actions'

const initialState = 'reactjs'

export default function selectedReddit(state = initialState, action) {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}
