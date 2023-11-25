/**
 * 複数の変数を同時に宣言する
 * ただしメンテナンス性に劣るので使わない
 */

// @ts-ignore
const greeting = "Hello," ,
      // @ts-ignore
      target = "world!",
      test = greeting + target

console.log(test)