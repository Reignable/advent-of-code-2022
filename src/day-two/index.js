// https://adventofcode.com/2022/day/2

import { partOneReducer } from './partOneReducer.js'
import { partTwoReducer } from './partTwoReducer.js'

const createRounds = inputString => inputString.split('\n')

const partFn = partReducer => inputString =>
  createRounds(inputString).reduce(partReducer, 0)

const dayTwo = {
  partOne: partFn(partOneReducer),
  partTwo: partFn(partTwoReducer),
}

export { dayTwo }
