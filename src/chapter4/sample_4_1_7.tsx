// @ts-ignore
const sum = (...args: number[]): number => {
  let result = 0
  for (const num of args) {
    result += num
  }
  return result
}

// @ts-ignore
console.log(sum(1, 10, 100))
// @ts-ignore
console.log(sum(123, 456))
// @ts-ignore
console.log(sum())
