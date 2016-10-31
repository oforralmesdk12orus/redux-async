import postsByReddit from './postsByReddit'
import {
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions'

describe('postsByReddit reducer', () => {

  it('should handle initial state', () => {

    let expected = {}

    let state = undefined

    let action = {}

    let actual = postsByReddit(state, action)

    expect(actual).toEqual(expected)

  })

  it('should handle INVALIDATE_REDDIT', () => {

    let expected = {
      reactjs: {
        isFetching: false,
        didInvalidate: true,
        items: [],
      },
    }

    let state = undefined

    let action = {
      type: INVALIDATE_REDDIT,
      reddit: 'reactjs',
    }

    let actual = postsByReddit(state, action)

    expect(actual).toEqual(expected)

  })

  it('should handle REQUEST_POSTS', () => {

    let expected = {
      reactjs: {
        isFetching: true,
        didInvalidate: false,
        items: [],
      },
    }

    let state = undefined

    let action = {
      type: REQUEST_POSTS,
      reddit: 'reactjs',
    }

    let actual = postsByReddit(state, action)

    expect(actual).toEqual(expected)

  })

  it('should handle RECEIVE_POSTS', () => {

    let expected = {
      reactjs: {
        isFetching: false,
        didInvalidate: false,
        items: [
          {
            somepost: 'somepost',
          },
        ],
        lastUpdated: '2016-01-01',
      },
    }

    let state = undefined

    let action = {
      type: RECEIVE_POSTS,
      reddit: 'reactjs',
      posts: [
        {
          somepost: 'somepost',
        },
      ],
      receivedAt: '2016-01-01',
    }

    let actual = postsByReddit(state, action)

    expect(actual).toEqual(expected)

  })
})
