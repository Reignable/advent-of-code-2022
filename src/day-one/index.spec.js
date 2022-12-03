import { describe, expect, it } from 'vitest'
import { dayOne } from '.'

const inputString = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`
describe('Day one', () => {
  it('Works', () => {
    expect(dayOne(inputString)).toBe(24000)
  })
})
