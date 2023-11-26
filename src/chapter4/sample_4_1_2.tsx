function helloWorldNTimes(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log('Hello, world!')
  }
}

helloWorldNTimes(5)

function helloWorldNTimes2(n: number): void {
  if (n >= 100) {
    console.log(`${n}回は無理です`)
    return
  }
  for (let i = 1; i <= n; i++) {
    console.log('Hello, world!')
  }
}

helloWorldNTimes2(100)
