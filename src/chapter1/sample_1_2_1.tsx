/** TypeScriptではシグネチャ違いの同名関数を定義することはできない */

 // function double(value: number) {
//     console.log(value * 2)
// }

// function double(value: string) {
//     console.log(value.repeat(2))
// }

/** こうすることで対応できる */
function double(value: string | number) {
    if (typeof value == "number") {
        console.log(value * 2)
    } else {
      console.log(value.repeat(2))
    }
}

double(123)
double("hello")