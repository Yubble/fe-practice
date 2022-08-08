// 调解，作用主要体现在改变对象的语义上

// 最初这个概念是体现在Object.defineProperty方法中

var sun = {};
// 篡改sun对象中rises的默认值与修改权限
// 老方法
Object.defineProperty(sun, 'truth', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

// 新方式
Reflect.defineProperty(sun, 'newTruth', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
})

console.log('sun truth', sun.truth);
sun.rises = false;
console.log('sun truth', sun.truth);
console.log('new truth', sun.newTruth)
