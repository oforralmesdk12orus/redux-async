import {
  INVALIDATE_REDDIT,
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
    default:
      return state
  }
}
