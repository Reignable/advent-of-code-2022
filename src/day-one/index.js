// https://adventofcode.com/2022/day/1

const dayOne = input => {
  let currentElfIndex = 0
  const allElvesTotalCalories = input
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
  return Math.max(...allElvesTotalCalories)
}

export { dayOne }
