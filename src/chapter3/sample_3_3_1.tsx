//部分型関係

type FooBar = {
  foo: string
  bar: number
}

type FooBarBaz = {
  foo: string
  bar: number
  baz: boolean
}

// @ts-ignore
const obj: FooBarBaz = {
  foo: 'hi',
  bar: 1,
  baz: false
}

// @ts-ignore
const obj2: FooBar = obj

console.log(typeof obj2)
console.log(obj2)
