let target = {
    name: 'lll',
    age: 15,
    array: [4, 2, 21]
}

const handle = {
    get(trapTarget, property, reciver) {
        /**
         * 如果用老思路 return trapTarget[property] 返回也可以
         * 但是 reciver 这个调用方发生变化的话，还需要手动转化作用域，
         * 所以直接使用Reflect.get对接才是最简洁的
         * */
        return Reflect.get(trapTarget, property, reciver)
        // 或者直接 return Reflect.get(...arguments)
    }
}

let proxy = new Proxy(target, handle)

console.log('----- equal ----', target.age === proxy.age)

proxy.age = 84
target.name = 'tttt'

console.log('--- target is ---', target)
console.log('---- proxy is ----', proxy)

const o = {
    'c': 'c'
}

const temFun = (f) => {
    const a = 'aaa'
    const b = 'bbb'
    return a + b + f + this.c
}

const p2 = new Proxy(temFun, {
    apply(target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, argumentsList)
    }
})

console.log('---- p2 is ---', p2(o, 'gg'))