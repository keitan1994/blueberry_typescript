let tupple = ['foo', 0]
tupple = ['aiueo', -555]

// @ts-ignore
const str = tupple[0]
const num = tupple[1]
const nothing = tupple[2]

console.log(str, num, nothing)
