import { getItemPriority } from './getItemPriority.js'

const findMatchingItem = (firstCompartment, secondCompartment) =>
  firstCompartment.filter(item => secondCompartment.includes(item))[0]

const splitCompartments = backpack => {
  const middleIndex = backpack.length / 2
  return [backpack.slice(0, middleIndex), backpack.slice(middleIndex)].map(
    s => [...s],
  )
}

const partOneReducer = (total, backpack) => {
  const [firstCompartment, secondCompartment] = splitCompartments(backpack)
  const matchingItem = findMatchingItem(firstCompartment, secondCompartment)
  const priority = getItemPriority(matchingItem)
  return total + priority
}

export { partOneReducer }
