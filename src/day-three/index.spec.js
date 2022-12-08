import { describe, expect, it } from 'vitest'
import { dayThree } from '.'

const inputString = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('Day three', () => {
  it('Calculates the sum of backpack priorities for individual elves', () => {
    expect(dayThree.partOne(inputString)).toBe(157)
  })

  it('Calculates the sum of group priorities', () => {
    expect(dayThree.partTwo(inputString)).toBe(70)
  })
})
