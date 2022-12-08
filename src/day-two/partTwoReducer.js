import { getScoreForRound } from './getScoreForRound.js'

const SHAPE_FOR_OUTCOME_MAP = {
  X: {
    A: 'C',
    B: 'A',
    C: 'B',
  },
  Z: {
    A: 'B',
    B: 'C',
    C: 'A',
  },
}

const getShapeForExpectedOutcome = (opponentShape, expectedOutcome) =>
  expectedOutcome === 'Y'
    ? opponentShape
    : SHAPE_FOR_OUTCOME_MAP[expectedOutcome][opponentShape]

const partTwoReducer = (total, round) => {
  const [opponentShape, expectedOutcome] = round.split(' ')
  const myShape = getShapeForExpectedOutcome(opponentShape, expectedOutcome)
  const roundScore = getScoreForRound(opponentShape, myShape)
  return total + roundScore
}

export { partTwoReducer }
