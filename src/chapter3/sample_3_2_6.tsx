// @ts-ignore
type MyObj = {
  foo: boolean
  bar: boolean
  baz?: number // オプショナルなプロパティ
}

// @ts-ignore
const obj: MyObj = { foo: false, bar: true }
// @ts-ignore
const obj2: MyObj = { foo: true, bar: false, baz: 1234 }

console.log(obj)
console.log(obj2)
