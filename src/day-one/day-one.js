// https://adventofcode.com/2022/day/1
import fs from 'fs'
import { answers } from '../answers.js'

const text = fs.readFileSync('src/day-one/input.txt').toString()

let currentElfIndex = 0
const allElvesTotalCalories = text
  .split('\n')
  .reduce((accumulator, element) => {
    if (element === '') {
      currentElfIndex++
      return accumulator
    }
    const currentElfHaul = accumulator[currentElfIndex] ?? 0
    const otherElvesTotalCalories = accumulator.slice(0, currentElfIndex)
    return [...otherElvesTotalCalories, currentElfHaul + parseInt(element)]
  }, [])

console.assert(Math.max(...allElvesTotalCalories) === answers[0])
