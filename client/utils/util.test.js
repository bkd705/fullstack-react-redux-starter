import { expect } from 'chai'
import { checkWebToken } from './authUtils'

describe('authUtils', () => {
  it('checkWebToken should return false given incorrect token', () => {
    const check = checkWebToken('lololtestwebtokenl11124sd')
    expect(check).to.equal(false)
  })
})