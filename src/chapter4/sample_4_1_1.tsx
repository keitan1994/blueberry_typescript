// 関数の巻き上げ
// 宣言よりも前で使える
console.log(range(5, 10))

function range(min: number, max: number): number[] {
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}
