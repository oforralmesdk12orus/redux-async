import selectedReddit from './selectedReddit'
import {
  SELECT_REDDIT
} from '../actions'

describe('selectedReddit reducer', () => {
  it('should handle initial state', () => {

    let expected = 'reactjs'

    let state = undefined

    let action = {}

    let actual = selectedReddit(state, action)

    expect(actual).toEqual(expected)
  })

  it('should handle SELECT_REDDIT', () => {

    let expected = 'redux'

    let state = undefined

    let action = {
      type: SELECT_REDDIT,
      reddit: 'redux'
    }

    let actual = selectedReddit(state, action)

    expect(actual).toEqual(expected)
  })
})
