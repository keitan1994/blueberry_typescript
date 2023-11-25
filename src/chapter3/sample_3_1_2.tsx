const input = ''
// @ts-ignore
const name = input ? input : '名無し'

/**
 * プロパティ名と変数名が同じ場合は「:」を省略できる
 * */
const user = {
  name,
  age: 20
}

console.log(user.name)
console.log(user.age)
