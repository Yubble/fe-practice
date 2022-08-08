const user = {
    name: 'Yubble'
}

console.log('---- Before eval ----', user)

const key = 'core'  // 内功
const value = 'alaksana' // 小无相功

const testEval = () => eval(`user.${key} = '${value}'`)

testEval()

console.log('---- After eval magic ----', user)