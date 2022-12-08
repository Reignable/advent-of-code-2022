import fs from 'fs'
import { dayOne } from './day-one/index.js'
import { dayThree } from './day-three/index.js'
import { dayTwo } from './day-two/index.js'

const showAnswer = (day, fn) => {
  console.log(
    `Day ${day}:`,
    fn(fs.readFileSync(`src/inputs/day-${day}.txt`).toString()),
  )
}

showAnswer('one', dayOne)
showAnswer('two', dayTwo.partOne)
showAnswer('two', dayTwo.partTwo)
showAnswer('three', dayThree.partOne)
showAnswer('three', dayThree.partTwo)
