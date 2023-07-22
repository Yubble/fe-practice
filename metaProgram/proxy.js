// proxy在元编程中的实现中彻底解决了反射概念里的调试能力，它比Object.defineProperty的优势在于可以完全去代理一个对象，而不是去监听一个对象的属性。
// 而proxy这种强大的元编程能力也会带来一些副作用，相比之下会变得比我们写普通代码时维护成本更高，所以这部分代码写在偏底层的部分要更好。

const obj = {
    name: 'Yubble',
    get foo() {
        return this.name
    }
}

const p = new Proxy(obj, {
    get(target, property, reciver) {
        return target[property]
        // return Reflect.get(target, property, reciver)
    }
})

const temp = { name: 'Ronnieo' }
temp.__proto__ = p  // 将代理对象赋值给temp作为原型
console.log('---- 直接访问temp对象的name ----', temp.name)  // 返回temp自带的name没问题
console.log('----- 获取temp原型上的foo属性 -----', temp.foo)  // 返回了obj的name Yubble
