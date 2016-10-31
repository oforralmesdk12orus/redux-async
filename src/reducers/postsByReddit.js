import {
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions'
import posts from './posts'

const initialState = {}

export default function postsByReddit(state = initialState, action) {

  switch (action.type) {

    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      }

    default:
      return state

  }

}
