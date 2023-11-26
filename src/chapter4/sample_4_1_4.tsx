type Human2 = {
  height: number
  weight: number
}

const calcBMI3 = ({ height, weight }: Human2): number => {
  return weight / height ** 2
}

const ore2 = { height: 1.65, weight: 88 }

console.log(calcBMI3(ore2))
