import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  selectReddit,
  invalidateReddit,
  requestPosts,
  receivePosts,
} from './index'

describe('actions', () => {

  it('SELECT_REDDIT should not be undefined', () => {

    let expected = true

    let actual = undefined !== SELECT_REDDIT

    expect(actual).toEqual(expected)

  })

  it('selectReddit should create SELECT_REDDIT action', () => {

    let expected = {
      type: SELECT_REDDIT,
      reddit: 'redux',
    }

    let actual = selectReddit('redux')

    expect(actual).toEqual(expected)

  })

  it('INVALIDATE_REDDIT should not be undefined', () => {

    let expected = true

    let actual = undefined !== INVALIDATE_REDDIT

    expect(actual).toEqual(expected)

  })

  it('invalidateReddit should create INVALIDATE_REDDIT action', () => {

    let expected = {
      type: INVALIDATE_REDDIT,
      reddit: 'reactjs',
    }

    let actual = invalidateReddit('reactjs')

    expect(actual).toEqual(expected)

  })

  it('REQUEST_POSTS should not be undefined', () => {

    let expected = true

    let actual = undefined !== REQUEST_POSTS

    expect(actual).toEqual(expected)

  })

  it('requestPosts should create REQUEST_POSTS action', () => {

    let expected = {
      type: REQUEST_POSTS,
      reddit: 'redux',
    }

    let actual = requestPosts('redux')

    expect(actual).toEqual(expected)

  })

  it('RECEIVE_POSTS should not be undefined', () => {

    let expected = true

    let actual = undefined !== RECEIVE_POSTS

    expect(actual).toEqual(expected)

  })

  it('receivePosts receivedAt should be an integer', () => {

    let expected = true

    let json = {
      data: {
        children: [
          {
            data: {
              title: 'somepost',
            },
          },
        ],
      },
    }

    let action = receivePosts('redux', json)

    let actual = Number.isInteger(action.receivedAt)

    expect(actual).toEqual(expected)

  })

  it('receivePosts should create RECEIVE_POSTS action', () => {

    let expected = {
      type: RECEIVE_POSTS,
      reddit: 'redux',
      posts: [
        {
          title: 'somepost',
        },
      ],
      receivedAt: 1,
    }

    let json = {
      data: {
        children: [
          {
            data: {
              title: 'somepost',
            },
          },
        ],
      },
    }

    let action = receivePosts('redux', json)

    action.receivedAt = 1

    let actual = action

    expect(actual).toEqual(expected)

  })
})
