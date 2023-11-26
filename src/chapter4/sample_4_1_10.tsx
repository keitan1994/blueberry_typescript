// @ts-ignore
type User = {
  name: string
  age: number
}

// @ts-ignore
const getName = (u: User): string => u.name

// @ts-ignore
const users: User[] = [
  { name: 'uhyo', age: 26 },
  { name: 'John Smith', age: 15 }
]

// const names = users.map(getName)
// console.log(names)

// @ts-ignore
const names = users.map((u: User): string => u.name)
console.log(names)
