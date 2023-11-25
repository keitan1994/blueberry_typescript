// @ts-ignore
const arr = [1, 10, 100]
arr.push(1000) // 末尾に要素を追加
console.log(arr)

arr.unshift(0) // 先頭に要素を追加
console.log(arr)

// 要素を含むか
console.log(arr.includes(9999))

// 要素のインデックスを返す
console.log(arr.indexOf(1))

// lengthはメソッドではなくプロパティ
console.log(arr.length)
