import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './index'

describe('actions', () => {

  it('SELECT_REDDIT should not be undefined', () => {

    let expected = true

    let actual = undefined !== SELECT_REDDIT

    expect(actual).toEqual(expected)
  })

  it('INVALIDATE_REDDIT should not be undefined', () => {

    let expected = true

    let actual = undefined !== INVALIDATE_REDDIT

    expect(actual).toEqual(expected)
  })

  it('REQUEST_POSTS should not be undefined', () => {

    let expected = true

    let actual = undefined !== REQUEST_POSTS

    expect(actual).toEqual(expected)
  })

  it('RECEIVE_POSTS should not be undefined', () => {

    let expected = true

    let actual = undefined !== RECEIVE_POSTS

    expect(actual).toEqual(expected)
  })

})
