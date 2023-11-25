// @ts-ignore
const obj = {
  foo: 123,
  'foo bar': -500,
  '↑↓↑↓': ''
}

console.log(obj.foo)
// @ts-ignore
console.log(obj['foo bar'])

const propName = 'foo'
// @ts-ignore
const obj2 = {
  [propName]: 123
}

console.log(obj2.foo)
