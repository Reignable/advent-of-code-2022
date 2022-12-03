import { describe, expect, it } from 'vitest'
import { dayTwo } from '.'

const inputString = `A Y
B X
C Z`

describe('Day Two', () => {
  it('Calculates the output of rock paper scissors game', () => {
    expect(dayTwo(inputString)).toBe(15)
  })
})
