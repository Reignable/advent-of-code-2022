import { describe, expect, it } from 'vitest'
import { dayTwo } from '.'

const inputString = `A Y
B X
C Z`

describe('Day Two', () => {
  describe('Part One', () => {
    it('Calculates the output of rock paper scissors game', () => {
      expect(dayTwo.partOne(inputString)).toBe(15)
    })
  })

  describe('Part Two', () => {
    it('Calculates the output of a rock paper scissors game now the dumb elf has come back', () => {
      expect(dayTwo.partTwo(inputString)).toBe(12)
    })
  })
})
