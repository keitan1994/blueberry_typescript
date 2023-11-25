// @ts-ignore
let sum = 0

for (let i: number = 1; i <= 100; i++) {
  sum += i
}

console.log(sum)

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue
  }
  console.log(i)
}
