/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-17 19:38:27
 **/
function Watcher(vm, exp, cb) {
  this.cb = cb
  this.vm = vm
  this.exp = exp
  this.value = this.get()
}

Watcher.prototype = {
  update() {
    this.run()
  },
  run() {
    const value = this.vm.data[this.exp]
    const oldVal = this.value
    if (value != oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },
  get() {
    Dep.target = this
    console.log('~~~ exp is ~~~', this.exp)
    const value = this.vm.data[this.exp]  // 强制执行Observe中的get方法
    Dep.target = null
    return value
  }
}
