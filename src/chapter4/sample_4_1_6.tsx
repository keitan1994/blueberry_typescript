// @ts-ignore
const obj = {
  double(num: number): number {
    return num * 2
  },
  double2: (num: number): number => num * 2
}

// @ts-ignore
console.log(obj.double(100))
// @ts-ignore
console.log(obj.double2(-50))
