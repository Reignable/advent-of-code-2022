// https://adventofcode.com/2022/day/2

const normalizeShape = shape => {
  switch (shape) {
    case 'X':
      return 'A'
    case 'Y':
      return 'B'
    case 'Z':
      return 'C'
    default:
      return shape
  }
}

const OUTCOME_MAP = {
  [2]: 0,
  [1]: 6,
  [0]: 3,
  [-1]: 0,
  [-2]: 6,
}

const SHAPE_SCORE_MAP = {
  A: 1,
  B: 2,
  C: 3,
}

const getOutcomeScore = (opponentShape, myShape) =>
  OUTCOME_MAP[myShape.charCodeAt(0) - opponentShape.charCodeAt(0)]

const getShapeScore = shape => SHAPE_SCORE_MAP[shape]

const getScoreForRound = round => {
  const [opponentShape, myShape] = round.split(' ').map(normalizeShape)
  return getShapeScore(myShape) + getOutcomeScore(opponentShape, myShape)
}

const dayTwo = inputString => {
  const rounds = inputString.split('\n')
  return rounds.reduce((total, round) => total + getScoreForRound(round), 0)
}

export { dayTwo }
