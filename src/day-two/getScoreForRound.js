const OUTCOME_SCORE_MAP = {
  [2]: 0,
  [1]: 6,
  [0]: 3,
  [-1]: 0,
  [-2]: 6,
}

export const getOutcomeScore = (opponentShape, myShape) =>
  OUTCOME_SCORE_MAP[myShape.charCodeAt(0) - opponentShape.charCodeAt(0)]

const SHAPE_SCORE_MAP = {
  A: 1,
  B: 2,
  C: 3,
}

export const getShapeScore = shape => SHAPE_SCORE_MAP[shape]

const getScoreForRound = (opponentShape, myShape) =>
  getShapeScore(myShape) + getOutcomeScore(opponentShape, myShape)

export { getScoreForRound }
