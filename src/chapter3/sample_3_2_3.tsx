type FooBarObj = {
  foo: number
  bar: string
}

// @ts-ignore
const obj: FooBarObj = {
  foo: 123,
  bar: 'Hello, world!'
}
