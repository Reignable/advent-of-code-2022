import fs from 'fs'
import { answers } from './answers.js'
import { dayOne } from './day-one/index.js'

console.assert(
  dayOne(fs.readFileSync('src/inputs/day-one.txt').toString()) === answers[0],
  'Day one solution incorrect',
)
