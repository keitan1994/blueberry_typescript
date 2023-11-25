const obj1 = {
  bar: 456,
  baz: 789
}

// スプレット構文
// @ts-ignore
const obj2 = {
  foo: 123,
  ...obj1
}

console.log(obj2)
