import posts from './posts'
import {
  INVALIDATE_REDDIT,
} from '../actions'

describe('posts reducer', () => {
  it('should handle initial state', () => {

    let expected = {
      isFetching: false,
      didInvalidate: false,
      items: [],
    }

    let state = undefined

    let action = {}

    let actual = posts(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle INVALIDATE_REDDIT', () => {

    let expected = {
      isFetching: false,
      didInvalidate: true,
      items: [],
    }

    let state = undefined

    let action = {
      type: INVALIDATE_REDDIT,
    }

    let actual = posts(state, action)

    expect(actual).toEqual(expected)
  })
})
