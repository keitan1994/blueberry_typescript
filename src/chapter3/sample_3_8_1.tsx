// @ts-ignore
type User = {
  name: string
  age: number
  premiumUser: boolean
}

// @ts-ignore
const data: string = `
uhyo,26,1
John Smith, 17,0
Mary Sue, 14, 1
`

// @ts-ignore
const users: User[] = []
// @ts-ignore
const lines = data.split('\n')
for (const line of lines) {
  if (line === '') {
    continue
  }
  const [name, ageString, premioumUserString] = line.split(',')
  const age = Number(ageString)
  const premiumUser = premioumUserString === '1'

  users.push({
    name,
    age,
    premiumUser
  })
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`)
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`)
  }
}
