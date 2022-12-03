import { getScoreForRound } from './getScoreForRound'

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

const partOneReducer = (total, round) =>
  total + getScoreForRound(...round.split(' ').map(normalizeShape))

export { partOneReducer }
