import intersection from 'lodash/intersection.js'
import { getItemPriority } from './getItemPriority.js'
import { partOneReducer } from './partOneReducer.js'

const partOne = input => {
  const backpacks = input.split('\n')
  const total = backpacks.reduce(partOneReducer, 0)
  return total
}

const partTwo = input => {
  const backpacks = input.split('\n').map(s => [...s])
  let currentGroupIndex = 0
  const groups = backpacks.reduce((groups, backpack, index) => {
    if (index % 3 === 0 && index !== 0) currentGroupIndex++
    const currentGroup = groups[currentGroupIndex] ?? []
    const otherGroups = groups.slice(0, currentGroupIndex)
    return [...otherGroups, [...currentGroup, backpack]]
  }, [])
  const badges = groups.map(group => intersection(...group)[0])
  const total = badges.reduce(
    (total, badge) => total + getItemPriority(badge),
    0,
  )
  return total
}

const dayThree = {
  partOne,
  partTwo,
}

export { dayThree }
