// 簡単な型の配列
// @ts-ignore
const arr1: boolean[] = [false, true]

// 複雑な型の配列
// @ts-ignore
const arr2: Array<{ name: string }> = [
  { name: '山田さん' },
  { name: '田中さん' },
  { name: '鈴木さん' }
]

console.log(arr2)
