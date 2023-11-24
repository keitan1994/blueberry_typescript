function repeatHello(count: number): string {
    // @ts-ignore
    return "hello".repeat(count);
}

// 型エラーが発生
//console.log(repeatHello("wow"))

console.log(repeatHello(10))
