/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-17 18:46:12
 **/
/**
 * 构造函数接收data，将data保存在成员变量this.data中
 * 调用walk方法，将data中参数遍历一次，给每个属性加上监听方法
 * */
function Observe(data) {
  this.data = data
  this.walk(data)
}

Observe.prototype = {
  // 遍历data对象，给每个属性添加监听方法
  walk(data) {
    Object.keys(data).forEach(key => {
      this.definReactive(data, key, data[key])
    })
  },
  // 监听方法
  definReactive(data, key, val) {
    // 对val值进行下一步监听，不然只能监听至第一层
    observers(val)

    console.log('key is ', key)
    // 订阅方法
    const dep = new Dep()

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        if (val === newVal) {
          return
        }

        val = newVal
        dep.notify()
        console.log(`属性：${key}已经被监听，现在值为${newVal.toString()}`)
      }
    })
  }
}

function observers(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  return new Observe(data)
}

function Dep() {
  console.log('订阅器初始化~')
  this.subs = []
  this.target = null
}

Dep.prototype = {
  addSub(sub) {
    console.log('增加订阅')
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
