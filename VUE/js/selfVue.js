/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-18 12:36:47
 **/
/**
 * 接收三个参数
 * data：需要双向绑定的state
 * el：需要用于控制的dom元素
 * exp：
*/
function SelfVue(data, el, exp) {
  this.data = data

  // 对data中的属性做个代理，如果self_vue.name访问或赋值的话，直接代理到self_vue.data上去
  Object.keys(data).forEach(key => {
    this.proxyKeys(key)
  })

  // 初始化模板的值
  el.innerHTML = this.data[exp]

  observers(data)

  new Watcher(this, exp, value => {
    el.innerHTML = value
  })
  return this
}

SelfVue.prototype = {
  proxyKeys(key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal
      }
    })
  }
}
