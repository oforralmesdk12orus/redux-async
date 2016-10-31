import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
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

})
