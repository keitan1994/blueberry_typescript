// 力試し 1
// FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

let line: string = ''
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    line += 'FizzBuzz'
  } else if (i % 3 === 0) {
    line += 'Fizz'
  } else if (i % 5 === 0) {
    line += 'Buzz'
  } else {
    line += i
  }
  line += ' '
}

console.log(line)
