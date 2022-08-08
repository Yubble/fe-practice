// 自省是反射的一个分支，其能力在于代码自我检查，访问内部属性，我们可以据此来获取代码的底层信息。


// 在es6推出之前，我们其实就已经可以用js做到自省了，如下：

const user = {
    'name': 'Yubble',
    'sex': 'male',
    'age': 24
}

const user1 = {
    'name': 'hubble',
    'sex': 'unkonw'
}

Object.keys(user).forEach(par => {
    // 老方式
    console.log(`${par} is ${user[par]}`)

    // 新方式
    console.log(`${par} is ${Reflect.get(user, par)}`)
})

const testGet = {
    name: 'lyb',
    get info() {
        return 'my name is' + this.name
    }
}

console.log(`show info ${Reflect.get(testGet, 'info')}`)

// 这种简单的遍历方式其实也是对元数据user的一种自省
