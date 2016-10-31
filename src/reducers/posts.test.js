import posts from './posts'
import {
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
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

  it('should handle REQUEST_POSTS', () => {

    let expected = {
      isFetching: true,
      didInvalidate: false,
      items: [],
    }

    let state = undefined

    let action = {
      type: REQUEST_POSTS,
    }

    let actual = posts(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle RECEIVE_POSTS', () => {

    let expected = {
      isFetching: false,
      didInvalidate: false,
      items: [
        {
          somepost: 'somepost',
        },
      ],
      lastUpdated: '2016-01-01',
    }

    let state = undefined

    let action = {
      type: RECEIVE_POSTS,
      posts: [
        {
          somepost: 'somepost',
        },
      ],
      receivedAt: '2016-01-01',
    }

    let actual = posts(state, action)

    expect(actual).toEqual(expected)
  })

})
