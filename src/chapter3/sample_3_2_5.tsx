// インデックスシグネチャ
// 任意のプロパティ名を許容する

type PriceData = {
  [key: string]: number // ここがインデックスシグネチャ
}

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
}

data.chicken = 250

console.log(data.apple)
console.log(data.coffee)
console.log(data.bento)
console.log(data.chicken)
