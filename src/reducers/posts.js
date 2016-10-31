import {
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}

export default function posts(state = initialState, action) {

  switch (action.type) {

    case INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true,
      }

    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }

    case RECEIVE_POSTS:
      return {
        ...state,
        items: action.posts,
        lastUpdated: action.receivedAt,
      }

    default:
      return state

  }

}
