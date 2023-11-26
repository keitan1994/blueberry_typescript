type Human = {
  height: number
  weight: number
}

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2
}

const uhyo: Human = { height: 1.84, weight: 72 }

console.log(calcBMI(uhyo))

// 引数の分割代入
const calcBMI2 = function ({ height, weight }: Human): number {
  return weight / height ** 2
}

const ore: Human = { height: 1.65, weight: 88 }

console.log(calcBMI2(ore))
