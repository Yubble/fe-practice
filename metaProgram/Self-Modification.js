// 自我修改，也是反射中一个重要的概念，顾名思义，就是自己修改自己


// 在es6之前，代码自己修改自己体现在了对象上，下面这个简单的实例则表现得很清晰
const blog = {
    name: 'freeCode',
    modifySelf(key, value) {
        // 老方法
        this[key] = value

        // 新方式
        Reflect.set(blog, key, value)
    }
}

blog.modifySelf('core', 'alaksana')
console.log(`blog is ${JSON.stringify(blog)}`)
