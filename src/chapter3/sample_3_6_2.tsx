const nested = {
  num: 123,
  obj: {
    foo: 'hello',
    bar: 'world'
  }
}

// ネストしたオブジェクトの分割代入
const {
  // @ts-ignore
  num,
  obj: { foo }
} = nested

console.log(num)
console.log(foo)

// 配列からの分割代入
// @ts-ignore
const arr = [1, 2, 3, 4, 5]

const [first, second, third] = arr

console.log(first, second, third)
