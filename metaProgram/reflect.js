// 对象反射，在reflect推出之后，既让javascript真正有了反射这个概念的操作方法。
/**
 * 它的具体操作方法有以下几种：
 *  Reflect.apply()
    Reflect.construct()
    Reflect.get()
    Reflect.has()
    Reflect.ownKeys()
    Reflect.set()
    Reflect.setPrototypeOf()
    Reflect.defineProperty()
    Reflect.deleteProperty()
    Reflect.getOwnPropertyDescriptor()
    Reflect.getPrototypeOf()
    Reflect.isExtensible()
*/

// 而为什么很多方法已经在Object和Function中实现了，但是还在引入这个Reflect呢？
/**
 * 原因主要有两点：
 * 1、集中在一个命名空间里，这个空间的所有操作，都是对对象的反射
 * 2、易于使用，之前在Object.defineProperty中做反射操作时，如果报错需要用try...catch来捕获，而按照新增Reflect API方式时，会返回一个布尔值
 * 3、函数一等公民：之前如果想在反射时判断对象中是否存在一个属性，我们需要使用语句操作(pro in obj)，如果使用的地方多了，则需要把它整体封装为一个函数，而reflect则提供了这个函数，直接reflect.has便可以使用
 * 4、apply的使用，我们从前使用apply时都是直接在fun后面点出来，但是很有可能这个fun有自己自定义的apply方法，所以eslint通常会提醒我们用Function.prototype.apply的方法。但是Reflect可以作为一个第三者去执行这项任务：Reflect.apply(fun, obj, arr)
 * 5、帮助其他类型完成反射
*/

