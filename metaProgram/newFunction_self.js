
const DS = {}
// 可以把这里理解为我们数据库中的元数据，或者是接口已返回给我们的大量元数据
// 这里不止id为23这么一只小动物哦
DS.metaData = [
    {
        'name': 'lucky',
        'price': 20,
        'regional': 'China',
        'type': 'cat',
        'id': 23
    },
    {
        'name': 'huzi',
        'price': 50,
        'regional': 'USA',
        'type': 'dog',
        'id': 41
    }
    // ...
]

// 此处全部为接口调用方法，使用猫咪的id获取信息，可以把这里理解成后台接口
DS.apis = {
    get_cat_name(id) { return 'lucky' },

    get_cat_price(id) { return 20 },

    get_cat_regional(id) { return 'China' },

    get_dog_name(id) { return 'huzi' },

    get_dog_price(id) { return 50 },

    get_dog_regional(id) { return 'USA' }
}

const AniFactory = ((allMethods) => {
    class Animal {
        constructor(id) {
            this.id = id
            // 这里将api接口方法全部赋予动物类属性中，可达到后面直接调用效果
            this.allMethods = allMethods
        }
        setId = function(id) { this.id = id }
    }

    Animal.define_methods = function(type) {
        // 注意这里推荐使用字符串拼接的方式，而不是使用es6字符模版，因为字符串模版${}中的变量编译时机不同，会踩坑
        const fnBody = 'const methodName = "get_' + type + '";' +
                        'const name = this.allMethods[methodName + "_name"](this.id);' +
                        'let price = this.allMethods[methodName + "_price"](this.id);' +
                        'const regional = this.allMethods[methodName + "_regional"](this.id);' +
                        'price = regional === "China" ? price : price + 5;' +
                        'return name + "来自" + regional + "售价为" + price'
        Animal.prototype['get_' + type + '_info'] = new Function(fnBody)
    }

    // 便利所有方法，取出不同类型，猫或狗，用以生成固定方法
    for (let method in allMethods) {
        const reg = /^get_(.+)_name$/
        const type = method.replace(reg, '$1')
        if (type !== method) {
            Animal.define_methods(type)
        }
    }

    Animal.getAniInstance = (id) => {
        let instanceAni
        if (!instanceAni) {
            instanceAni = new Animal(id)
        }
        return instanceAni
    }

    return Animal
})(DS.apis)


// 先创建一个动物类的实例
const aniInstance = AniFactory.getAniInstance(21)
// 根据传入的id，取出猫猫的信息
console.log(aniInstance.get_cat_info())    // lucky 来自 China，售价 20 人民币
// 更换id，取出狗狗的信息
aniInstance.setId(45)
console.log(aniInstance.get_dog_info())    // huzi 来自 USA，售价 55 人民币