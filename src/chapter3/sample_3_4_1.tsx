type User<T> = {
  name: string
  child: T // 型引数
}

type Family<Parent, Child> = {
  mother: Parent
  father: Parent
  child: Child
}

const obj_3_4_1: Family<number, string> = {
  mother: 0,
  father: 100,
  child: '1000'
}
